<script setup lang="ts"></script>

<template>
  <section class="py-32 lg:py-40 relative">
    <BaseContainer class="z-10 relative">
      <div class="max-w-[44rem] mx-auto flex flex-col text-center gap-4">
        <div class="max-w-[180px] mx-auto">
          <Logo variant="hybrid-dark" />
        </div>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-balance">
          Compartilhe ideias e ajude a comunidade
        </h1>

        <p class="text-center text-lg mt-2">
          Crie e compartilhe suas melhores ideias em poucos cliques. Deixe que a
          comunidade explore seu potencial e inspire-se em novas possibilidades.
        </p>

        <div class="mt-4">
          <Button
            label="Comece agora"
            as="router-link"
            to="/auth/login"
            size="large"
            icon="pi pi-sign-in"
            icon-pos="right"
          />
        </div>
      </div>
    </BaseContainer>

    <div class="z-0 absolute inset-0 w-full h-full">
      <img
        src="/public//images/grid-pattern.png"
        aria-hidden="true"
        class="w-full h-full opacity-20 object-cover pointer-events-none"
        alt=""
      />
    </div>
  </section>
</template>
