import { z } from "zod"
import type { ZodFormattedError } from "zod"
import type { Idea } from "~/entities/Idea/Idea"

interface UseIdeaUpdate {
  idea: Ref<Idea | null>
}

const schema = z.object({
  title: z.string().min(2, "Título é obrigatório"),
  content: z.string().min(2, "Descreva a sua ideia"),
})

export function useIdeaUpdate({ idea }: UseIdeaUpdate) {
  const services = useServices()
  const toast = useToast()
  const { logger } = useLogger()

  const loading = ref(false)
  const errors = ref<ZodFormattedError<Idea>>()
  const title = ref("")
  const content = ref("")

  const safeParse = () => {
    const result = schema.safeParse({
      title: title.value,
      content: content.value,
    })

    if (!result.success) {
      errors.value = result.error.format()
    }

    return result
  }

  const update = async () => {
    if (!idea.value) return

    try {
      loading.value = true

      await services.idea.updateOne(idea.value?.id, {
        title: title.value,
        content: content.value,
      })

      toast.add({
        severity: "success",
        summary: "Sucesso!",
        detail: "Sua ideia foi atualizada",
        life: 2000,
      })

      errors.value = undefined
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    if (!idea.value) return

    title.value = idea.value.title
    content.value = idea.value.content
  })

  return {
    loading,
    errors,
    title,
    content,
    safeParse,
    update,
  }
}
