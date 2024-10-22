<script setup lang="ts">
definePageMeta({
  layout: "auth",
})

useSeoMeta({
  title: "Meu App",
})

const { logout } = useAuthActions()
</script>

<template>
  <div>Dashboard</div>
  <button @click="logout">logout</button>
</template>
