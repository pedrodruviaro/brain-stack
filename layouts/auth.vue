<script setup lang="ts">
const router = useRouter()

const { loading } = useMyself()
</script>

<template>
  <div>
    <AdminHeaderLoader :loading="loading">
      <AdminHeader @wants-create-idea="router.push('/app/idea/new')" />
    </AdminHeaderLoader>

    <BaseContainer as="main" class="py-10 lg:py-16">
      <template v-if="loading">
        <Skeleton width="100%" height="40rem" />
      </template>

      <slot v-else />
    </BaseContainer>
  </div>
</template>
