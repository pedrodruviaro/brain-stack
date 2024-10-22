import { z, type ZodFormattedError } from "zod"
import type { Idea } from "~/entities/Idea/Idea"
import type { User } from "~/entities/User/User"

interface UseIdeaCreateOptions {
  user: Ref<User | undefined>
}

const schema = z.object({
  title: z.string().min(2, "Título é obrigatório"),
  content: z.string().min(2, "Descreva a sua ideia"),
})

export function useIdeaCreate({ user }: UseIdeaCreateOptions) {
  const toast = useToast()
  const services = useServices()
  const { logger } = useLogger()

  const loading = ref(false)
  const title = ref("")
  const content = ref("")
  const profileId = ref("")
  const errors = ref<ZodFormattedError<Idea>>()

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

  const create = async () => {
    try {
      loading.value = true

      const response = await services.idea.create({
        title: title.value,
        content: content.value,
        profileId: profileId.value,
      })

      toast.add({
        severity: "success",
        summary: "Sucesso!",
        detail: "Ideia criada!",
        life: 2000,
      })

      title.value = ""
      content.value = ""
      errors.value = undefined

      return response
    } catch (error) {
      logger(error)
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    if (!user.value) return
    profileId.value = user.value.id
  })

  return {
    loading,
    title,
    content,
    errors,
    create,
    safeParse,
  }
}
