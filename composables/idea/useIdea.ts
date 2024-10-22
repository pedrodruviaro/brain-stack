import type { Database } from "~/libs/supabase/schema"

type Idea = Database["public"]["Tables"]["ideas"]["Row"]

export function useIdea(id: number) {
  const services = useServices()
  const { logger } = useLogger()

  const loading = ref(false)
  const idea = ref<Idea>()

  const getIdea = async () => {
    try {
      loading.value = true

      const response = await services.idea.readOne(id)
      if (response.data) {
        idea.value = response.data
      }

      return response
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
