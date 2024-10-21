<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: "div",
  }
)
</script>

<template>
  <Component :is="props.as" class="w-full px-6 lg:px-8 max-w-6xl mx-auto">
    <slot />
  </Component>
</template>
