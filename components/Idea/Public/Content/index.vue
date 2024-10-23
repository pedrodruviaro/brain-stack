<script setup lang="ts">
const props = defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <Card>
    <template #title>
      <BaseTitle as="h1">💡 {{ props.title }}</BaseTitle>
      <Divider type="solid" />
    </template>

    <template #content>
      <Prose>
        <div v-html="props.content" />
      </Prose>
    </template>
  </Card>
</template>
