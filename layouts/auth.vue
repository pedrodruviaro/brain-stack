<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <AdminHeader @wants-create-idea="router.push('/app/idea/new')" />
    <BaseContainer as="main" class="py-10 lg:py-16">
      <slot />
    </BaseContainer>
  </div>
</template>
