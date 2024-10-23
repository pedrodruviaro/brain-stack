<script setup lang="ts">
import LazyDialog from "primevue/dialog"

definePageMeta({
  layout: "auth",
})

useSeoMeta({
  title: "Crie sua ideia",
})

const isPreviewOpen = ref(false)

const { user } = useLoggedUser()
const { loading, title, content, errors, create, safeParse } = useIdeaCreate({
  user,
})

const handleCreate = async () => {
  const isValid = safeParse().success
  if (!isValid) return

  const response = await create()
  if (response) {
    // router.push...
    console.log("Criado!")
  }
}
</script>

<template>
  <div>
    <BaseTitle as="h1" label="Crie sua Ideia" class="mb-6" decoration />

    <IdeaNewForm
      v-model:title="title"
      v-model:content="content"
      :loading="loading"
      :errors="errors"
      @create="handleCreate"
      @open-preview="isPreviewOpen = true"
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
