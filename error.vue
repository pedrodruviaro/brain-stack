<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <main class="min-h-screen w-full">
    <BaseContainer>
      <div class="grid place-items-center gap-2">
        <h1 class="font-bold text-xl lg:text-2xl">
          Parece que essa página não existe 🤔
        </h1>
        <div class="flex justify-center">
          <Button as="router-link" to="/">Voltar para o início</Button>
        </div>
      </div>
    </BaseContainer>
  </main>
</template>
