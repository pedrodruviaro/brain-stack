export function useIdeaDelete(id: string) {
  const services = useServices()
  const toast = useToast()
  const router = useRouter()
  const { logger } = useLogger()

  const loading = ref(false)

  const removeIdea = async () => {
    try {
      loading.value = true

      const response = await services.idea.deleteOne(id)

      if (!response.id) return

      toast.add({
        severity: "info",
        summary: "Feito!",
        detail: "A ideia foi apagada!",
        life: 2000,
      })

      router.push("/app")
      return response.id
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    removeIdea,
  }
}
