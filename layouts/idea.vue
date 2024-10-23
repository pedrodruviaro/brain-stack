<script setup lang="ts"></script>

<template>
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
</template>
