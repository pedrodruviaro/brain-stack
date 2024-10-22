<script setup lang="ts">
definePageMeta({
  layout: "auth",
})

useSeoMeta({
  title: "Meu App",
})

const { user } = useLoggedUser()
</script>

<template>
  <div class="space-y-6">
    <DashboardHeadline
      v-if="user"
      :name="user?.name"
      :avatarUrl="user?.avatarUrl"
    />

    <!-- Ideas -->
    <Skeleton width="100%" height="10rem" />
  </div>
</template>
