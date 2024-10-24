<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean
    count?: number
  }>(),
  { count: 5 }
)
</script>

<template>
  <div class="grid gap-4" v-if="props.loading">
    <Skeleton width="100%" height="5rem" v-for="i in props.count" :key="i" />
  </div>

  <slot v-else />
</template>
