import AuthServices from "~/services/auth/services"

export function useServices() {
  const client = useSupabaseClient()
  const config = useRuntimeConfig()

  const redirectTo = `${config.public.siteUrl}/auth/redirect`

  return {
    auth: AuthServices(client, { redirectTo: redirectTo }),
  }
}
