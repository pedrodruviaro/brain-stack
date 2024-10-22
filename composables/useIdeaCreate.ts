export function useIdeaCreate() {
  const toast = useToast()

  const loading = ref(false)
  const title = ref("")
  const content = ref("")

  const create = async () => {
    if (title.value.trim() === "" || content.value.trim() === "") {
      toast.add({
        severity: "error",
        summary: "Atenção",
        detail: "Título e conteúdo são obrigatórios",
        life: 2000,
      })
      return
    }

    // API CALL await services...

    toast.add({
      severity: "success",
      summary: "Sucesso!",
      detail: "Ideia criada!",
    })

    console.log("* CRIAR")
  }

  return {
    loading,
    title,
    content,
    create,
  }
}
