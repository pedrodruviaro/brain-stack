<script setup lang="ts">
const props = defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <Card>
    <template #title>
      <h1 class="font-bold text-xl md:text-2xl">💡 {{ props.title }}</h1>
      <Divider type="solid" />
    </template>

    <template #content>
      <Prose>
        <div v-html="props.content" />
      </Prose>
    </template>
  </Card>
</template>
