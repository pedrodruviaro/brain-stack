<script setup lang="ts">
const currentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="py-10 bg-zinc-900">
    <BaseContainer>
      <p class="text-white text-sm text-center mx-auto">
        &copy; Copyright {{ currentYear }} - Todos os direitos reservados
      </p>
    </BaseContainer>
  </footer>
</template>
