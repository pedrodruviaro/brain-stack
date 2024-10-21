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
    <NuxtLoadingIndicator color="#DB2777" :height="4" />
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
