import type { User } from "~/entities/User/User"

export interface MySelfContextProvider {
  user: Ref<User | undefined>
  loading: Ref<boolean>
}

export const mySelfKey = Symbol("myself") as InjectionKey<MySelfContextProvider>

export function useMyself() {
  const services = useServices()
  const authUser = useSupabaseUser()
  const router = useRouter()
  const { logger } = useLogger()

  const loading = ref(false)
  const user = ref<User>()

  provide<MySelfContextProvider>(mySelfKey, { user, loading })

  const getMe = async () => {
    if (!authUser.value) {
      router.push("/auth/login")
      return
    }

    try {
      loading.value = true

      const response = await services.auth.getMyself(authUser.value?.id)

      if (!response) return
      user.value = response
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => getMe())

  return {
    user,
    loading,
    getMe,
  }
}
