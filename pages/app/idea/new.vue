<script setup lang="ts">
import LazyDialog from "primevue/dialog"

definePageMeta({
  layout: "auth",
})

useSeoMeta({
  title: "Crie sua ideia",
})

const isPreviewOpen = ref(false)

const router = useRouter()

const { user } = useLoggedUser()
const { loading, title, content, errors, create, safeParse } = useIdeaCreate({
  user,
})

const handleCreate = async () => {
  const isValid = safeParse().success
  if (!isValid) return

  const response = await create()
  if (response) {
    setTimeout(() => router.push("/app"), 750)
  }
}

onBeforeRouteLeave((to, from, next) => {
  if (title.value.trim() !== "" || content.value.trim() !== "") {
    const message = "Você tem conteúdo não salvo, deseja realmente sair?"
    const wantsToLeave = confirm(message)
    if (wantsToLeave) {
      next()
      return
    }
    next(false)
  } else {
    next()
  }
})
</script>

<template>
  <div>
    <BaseTitle as="h1" label="Crie sua Ideia" class="mb-6" decoration />

    <IdeaNewForm
      v-model:title="title"
      v-model:content="content"
      :loading="loading"
      :errors="errors"
      @open-preview="isPreviewOpen = true"
    />

    <Button
      label="Criar ideia"
      icon="pi pi-plus"
      icon-pos="right"
      size="small"
      class="mt-6"
      :loading="loading"
      @click="handleCreate"
    />

    <LazyDialog
      v-model:visible="isPreviewOpen"
      maximizable
      modal
      :header="title"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <LazyProse>
        <div v-html="content" />
      </LazyProse>
    </LazyDialog>
  </div>
</template>
