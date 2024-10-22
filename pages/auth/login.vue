<script setup lang="ts">
useSeoMeta({
  title: "Entre e comece a compartilhar",
})

const loading = ref(false)
</script>

<template>
  <BaseContainer
    as="main"
    class="min-h-screen bg-pink-100 md:grid md:bg-transparent"
  >
    <div
      class="py-10 pt-20 md:pt-16 lg:py-16 grid md:grid-cols-[1fr_0.65fr] md:items-center md:gap-4 md:h-full"
    >
      <Card class="relative z-10">
        <template #content>
          <div class="max-w-40 mb-4">
            <Logo variant="dark" />
          </div>
          <h1 class="font-bold text-xl lg:text-2xl mb-2">
            Comece a compartilhar suas ideias hoje!
          </h1>
          <p class="mb-8">
            Conecte-se agora e transforme suas melhores ideias em projetos
            colaborativos, prontos para ganhar vida.
          </p>

          <Divider align="center">
            <b>Faça o login</b>
          </Divider>
          <div class="flex justify-center mt-8">
            <Button
              label="Entrar com Google"
              icon="pi pi-google"
              icon-pos="right"
              outlined
              :loading
            />
          </div>
        </template>
      </Card>

      <div
        class="hidden md:block md:absolute md:max-w-[50%] md:top-0 md:bottom-0 md:right-0 md:w-full md:h-full"
      >
        <img
          src="/images/login-img.svg"
          alt=""
          class="w-full h-full object-cover object-left"
        />
      </div>
    </div>
  </BaseContainer>
</template>
