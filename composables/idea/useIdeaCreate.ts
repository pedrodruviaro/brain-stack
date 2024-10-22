import type { User } from "~/entities/User/User"

interface UseIdeaCreateOptions {
  user: Ref<User | undefined>
}

export function useIdeaCreate({ user }: UseIdeaCreateOptions) {
  const toast = useToast()
  const services = useServices()
  const { logger } = useLogger()

  const loading = ref(false)
  const title = ref("")
  const content = ref("")
  const profileId = ref("")

  const create = async () => {
    try {
      if (title.value.trim() === "" || content.value.trim() === "") {
        toast.add({
          severity: "error",
          summary: "Atenção",
          detail: "Título e conteúdo são obrigatórios",
          life: 2000,
        })
        return
      }

      loading.value = true

      await services.idea.create({
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
    create,
  }
}
