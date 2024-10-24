export function useShareAction() {
  const toast = useToast()
  const { isSupported, copy } = useClipboard()
  const { share } = useShare()

  const shareUrl = async (path: string) => {
    const url = `${window.location.origin}/${path}`

    if (!isSupported.value) {
      await copy(url)
      toast.add({
        severity: "info",
        summary: "Sucesso!",
        detail: "Link copiado",
        life: 1500,
      })
      return
    }

    share({
      title: "BrainStack",
      text: "Veja esse conteúdo do BrainStack",
      url,
    })
  }

  return {
    shareUrl,
  }
}
