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
const { loading, title, content, create } = useIdeaCreate({ user })

const handleCreate = () => {
  create()
}
</script>

<template>
  <div>
    <IdeaNewForm
      v-model:title="title"
      v-model:content="content"
      :loading="loading"
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
