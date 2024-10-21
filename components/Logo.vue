<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "white" | "dark" | "hybrid"
  }>(),
  { variant: "white" }
)
</script>

<template>
  <span class="block max-w-max">
    <img
      src="/images/logo-white.svg"
      aria-hidden="true"
      alt=""
      v-if="props.variant === 'white'"
    />
    <img
      src="/images/logo-pink.svg"
      aria-hidden="true"
      alt=""
      v-else-if="props.variant === 'hybrid'"
    />
    <img src="/images/logo-dark.svg" aria-hidden="true" alt="" v-else />
  </span>
</template>
