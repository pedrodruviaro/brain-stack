import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/libs/supabase/schema"
import { getMyselfAdapter } from "./adapters"
import type { AuthServicesOptions } from "./types"

export default (
  client: SupabaseClient<Database>,
  options: AuthServicesOptions
) => ({
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
