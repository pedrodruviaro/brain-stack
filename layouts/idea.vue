<script setup lang="ts">
const user = useSupabaseUser()
const session = useSupabaseSession()

const isLogged = computed(() => {
  return Boolean(user.value && session.value)
})
</script>

<template>
  <div>
    <div class="relative z-10">
      <AdminHeader v-if="isLogged" />
      <PublicHeader v-else />
    </div>

    <main class="bg-pink-300 h-full min-h-screen grid relative">
      <BaseContainer class="py-10 relative z-10">
        <slot />
      </BaseContainer>

      <div class="absolute inset-0 w-full h-full border">
        <img
          src="/public/images/sky-pattern.png"
          alt=""
          aria-hidden="true"
          class="w-full h-full object-cover"
        />
      </div>
    </main>
  </div>
</template>
