<script setup lang="ts">
definePageMeta({
  layout: "idea",
})

const route = useRoute()
const ideaId = computed(() => route.params.id as string)

const services = useServices()
const { data: idea } = await useAsyncData("read-one-idea", async () => {
  return await services.idea.readOne(ideaId.value)
})

useSeoMeta({
  title: idea.value?.title ?? "Ops... Ideia não encontrada 💡",
})
</script>

<template>
  <div>
    <IdeaPublicContent
      v-if="idea"
      :title="idea.title"
      :content="idea.content"
    />

    <IdeaPublicContentEmpty v-else />
  </div>
</template>
