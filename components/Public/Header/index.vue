<script setup lang="ts"></script>

<template>
  <header class="py-3 shadow-sm">
    <BaseContainer class="flex items-center justify-between gap-3 flex-wrap">
      <NuxtLink to="/app" class="max-w-28 block">
        <div>
          <Logo variant="hybrid-dark" />
        </div>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <Button
          as="router-link"
          to="/auth/login"
          label="Comece a criar"
          outlined
        />
      </div>
    </BaseContainer>
  </header>
</template>
