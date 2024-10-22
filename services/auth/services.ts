import type { SupabaseClient } from "@supabase/supabase-js"

export interface Options {
  redirectTo: string
}

export default (client: SupabaseClient, options: Options) => ({
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
})
