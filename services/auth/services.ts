import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/libs/supabase/schema"
import { getMyselfAdapter } from "./adapters"

export interface Options {
  redirectTo: string
}

export default (client: SupabaseClient<Database>, options: Options) => ({
  async signInWithGoogle() {
    await client.auth.signInWithOAuth({
      provider: "google",

      options: {
        redirectTo: options.redirectTo,
      },
    })
  },

  async logout() {
    await client.auth.signOut()
  },

  async getMyself(id: string) {
    const response = await client
      .from("profiles")
      .select("*")
      .eq("id", id)
      .limit(1)
      .single()
    const user = getMyselfAdapter(response.data)
    return user
  },
})
