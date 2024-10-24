import { v4 as uuidv4 } from "uuid"
import { readAllAdapter, readOneAdapter } from "./adapters"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/libs/supabase/schema"
import type { CreateOptions, ReadAllOptions, UpdateOptions } from "./types"
import type { ReadAllRow, ReadOneRow } from "./adapters"

export default (client: SupabaseClient<Database>) => ({
  async create({ title, content, profileId }: CreateOptions) {
    const id = uuidv4()

    await client
      .from("ideas")
      .insert({ content, title, profile_id: profileId, id })

    return { id }
  },

  async updateOne(id: string, { title, content }: UpdateOptions) {
    await client.from("ideas").update({ title, content }).eq("id", id)
    return { id }
  },

  async readOne(id: string) {
    const response = await client
      .from("ideas")
      .select("*")
      .eq("id", id)
      .returns<ReadOneRow>()
      .single()

    return readOneAdapter(response.data)
  },

  async readAll({ userId, from = 0, to = 5 }: ReadAllOptions) {
    const [total, ideas] = await Promise.all([
      // count
      client
        .from("ideas")
        .select("profiles!inner(id)", { count: "exact", head: true })
        .eq("profiles.id", userId),

      // ideas
      client
        .from("ideas")
        .select("id, title, content, created_at, profiles!inner(id)")
        .eq("profiles.id", userId)
        .order("created_at", { ascending: false })
        .range(from, to)
        .returns<ReadAllRow[]>(),
    ])

    return {
      total: total.count ?? 0,
      results: readAllAdapter(ideas.data),
    }
  },
})
