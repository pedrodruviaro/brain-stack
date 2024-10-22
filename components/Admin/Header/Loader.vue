<script setup lang="ts">
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div v-if="props.loading" class="shadow-sm py-3">
    <BaseContainer class="flex flex-wrap gap-2 justify-between">
      <Skeleton height="3rem" width="100%" class="max-w-28" />
      <Skeleton height="3rem" width="3rem" />
    </BaseContainer>
  </div>

  <slot v-else />
</template>
