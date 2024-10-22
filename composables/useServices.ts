import type { Database } from "~/libs/supabase/schema"
import AuthServices from "~/services/auth/services"
import IdeaServices from "~/services/idea/services"

export function useServices() {
  const client = useSupabaseClient<Database>()
  const config = useRuntimeConfig()

  const redirectTo = `${config.public.siteUrl}/auth/redirect`

  return {
    auth: AuthServices(client, { redirectTo: redirectTo }),
    idea: IdeaServices(client),
  }
}
