<script setup lang="ts">
useSeoMeta({
  title: "Quase lá...",
})

const router = useRouter()

const navigateToAppDashboard = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1_250))
  router.push("/app")
}

onMounted(() => navigateToAppDashboard())
</script>

<template>
  <div
    class="bg-[radial-gradient(circle_at_0%_125%,_#ffffff,_#ffc7d3,_#f1a8b8)]"
  >
    <BaseContainer as="main" class="min-h-screen grid">
      <p
        class="animate-pulse absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-max max-h-max font-bold text-2xl lg:text-3xl"
      >
        Redirecionando...
      </p>
    </BaseContainer>
  </div>
</template>
