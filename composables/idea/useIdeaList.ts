import type { Idea } from "~/entities/Idea/Idea"
import type { User } from "~/entities/User/User"

interface UseIdeaListOptions {
  user: Ref<User | undefined>
}

export function useIdeaList({ user }: UseIdeaListOptions) {
  const services = useServices()
  const { logger } = useLogger()

  const loading = ref(false)
  const loadingMore = ref(false)

  const PAGE_COUNT = 4
  const page = ref(0)
  const from = computed(() => page.value * PAGE_COUNT)
  const to = computed(() => from.value + PAGE_COUNT - 1)

  const ideas = ref<Idea[]>([])
  const totalIdeas = ref(0)

  const userId = ref()

  const fetchIdeasList = async () => {
    try {
      loading.value = true

      const response = await services.idea.readAll({
        userId: userId.value,
        from: from.value,
        to: to.value,
      })

      totalIdeas.value = response.total
      ideas.value = response.results
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  const fetchMoreIdeas = async () => {
    const canGetMore = totalIdeas.value > ideas.value.length

    if (!canGetMore) return

    try {
      loadingMore.value = true

      page.value = page.value + 1

      const response = await services.idea.readAll({
        userId: userId.value,
        from: from.value,
        to: to.value,
      })

      ideas.value.push(...response.results)
    } catch (error) {
      logger(error)
    } finally {
      loadingMore.value = false
    }
  }

  watch(
    () => user.value,
    () => {
      if (!user.value) return

      userId.value = user.value.id
      fetchIdeasList()
    },
    {
      immediate: true,
      once: true,
    }
  )

  return {
    loading,
    loadingMore,
    ideas,
    totalIdeas,
    fetchMoreIdeas,
  }
}
