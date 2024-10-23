import type { Idea } from "~/entities/Idea/Idea"

interface UseIdeaOptions {
  id: string
}

export function useIdea({ id }: UseIdeaOptions) {
  const { logger } = useLogger()
  const services = useServices()

  const loading = ref(false)
  const idea = ref<Idea>()

  const getIdea = async () => {
    try {
      loading.value = true
      const response = await services.idea.readOne(id)

      if (!response) return

      idea.value = response
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    idea,
    getIdea,
  }
}
