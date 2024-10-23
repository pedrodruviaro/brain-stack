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
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#DB2777" :height="4" />
      <NuxtPage />
      <Toast position="top-right" />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  @apply font-[Poppins];
}

.ql-image {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
}
</style>
