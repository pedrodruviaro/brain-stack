<script setup lang="ts"></script>

<template>
  <section class="py-3 px-2 bg-pink-500 text-white">
    <BaseContainer as="section">
      <p class="text-sm lg:text-base text-center">
        <NuxtLink
          to="https://github.com/pedrodruviaro/brain-stack"
          external
          target="_blank"
          class="flex items-start justify-center gap-2 hover:opacity-80"
        >
          Conheça o código desse projeto no GitHub
          <i class="pi pi-github"></i>
        </NuxtLink>
      </p>
    </BaseContainer>
  </section>
</template>
