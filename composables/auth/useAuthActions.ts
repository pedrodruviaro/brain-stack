export function useAuthActions() {
  const services = useServices()
  const toast = useToast()
  const router = useRouter()
  const { logger } = useLogger()

  const loading = ref(false)

  const loginWithGoogle = async () => {
    try {
      loading.value = true
      await services.auth.signInWithGoogle()
    } catch (error) {
      logger(error)
      toast.add({
        severity: "error",
        detail: "Algo deu errado",
        summary: "Tente novamente",
      })
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      loading.value = true
      await services.auth.logout()
      router.push("/")
    } catch (error) {
      logger(error)
      toast.add({
        severity: "error",
        detail: "Algo deu errado",
        summary: "Tente novamente",
      })
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    loginWithGoogle,
    logout,
  }
}
