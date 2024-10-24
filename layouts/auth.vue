<script setup lang="ts">
import LazyConfirmDialog from "primevue/confirmdialog"

const { loading } = useMyself()
</script>

<template>
  <div>
    <AdminHeaderLoader :loading="loading">
      <AdminHeader />
    </AdminHeaderLoader>

    <BaseContainer as="main" class="py-10 lg:py-16">
      <template v-if="loading">
        <Skeleton width="100%" height="40rem" />
      </template>

      <slot v-else />
    </BaseContainer>

    <LazyConfirmDialog />
  </div>
</template>
