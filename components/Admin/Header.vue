<script setup lang="ts">
const emits = defineEmits<{
  (e: "wants-create-idea"): void
}>()
</script>

<template>
  <header class="py-3 shadow-sm">
    <BaseContainer class="flex items-center justify-between gap-3 flex-wrap">
      <NuxtLink to="/app" class="max-w-28 block">
        <div>
          <Logo variant="dark" />
        </div>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <Button
          icon="pi pi-plus"
          aria-label="Save"
          size="small"
          outlined
          @click="emits('wants-create-idea')"
          v-tooltip="'Criar nova ideia'"
        />
      </div>
    </BaseContainer>
  </header>
</template>
