<script setup lang="ts">
import Card from "primevue/card"

const props = defineProps<{
  id: string
  title: string
  createdAt: string | Date
}>()

const emits = defineEmits<{
  (e: "share", id: string): void
  (e: "edit", id: string): void
}>()

const formatedDate = computed(() => {
  return new Date(props.createdAt).toLocaleDateString("pt-BR")
})
</script>

<template>
  <Card>
    <template #title>
      <BaseTitle size="sm" :label="props.title" />
    </template>
    <template #content>
      <Chip :label="formatedDate" icon="pi pi-calendar-clock" class="text-sm" />

      <div class="mt-4 flex justify-end gap-2">
        <Button
          label="Compartilhar"
          icon="pi pi-share-alt"
          outlined
          size="small"
          icon-pos="right"
          @click="emits('share', props.id)"
        />
        <Button
          label="Editar"
          size="small"
          icon="pi pi-pencil"
          icon-pos="right"
          @click="emits('edit', props.id)"
        />
      </div>
    </template>
  </Card>
</template>
