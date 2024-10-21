<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "pt-BR",
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - BrainStack` : "BrainStack"
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  @apply font-[Poppins];
}
</style>
