import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/libs/supabase/schema"

export default (client: SupabaseClient<Database>) => ({
  async readOne(id: number) {
    const response = await client
      .from("ideas")
      .select("*")
      .eq("id", id)
      .limit(1)
      .single()
    return response
  },
})
