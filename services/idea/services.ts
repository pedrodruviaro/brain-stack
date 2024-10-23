import { v4 as uuidv4 } from "uuid"
import { readOneAdapter } from "./adapters"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/libs/supabase/schema"
import type { CreateOptions } from "./types"
import type { ReadOneRow } from "./adapters"

export default (client: SupabaseClient<Database>) => ({
  async create({ title, content, profileId }: CreateOptions) {
    const id = uuidv4()

    await client
      .from("ideas")
      .insert({ content, title, profile_id: profileId, id })

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
})
