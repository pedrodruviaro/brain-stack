<script setup lang="ts"></script>

<template>
  <Card>
    <template #content>
      <p class="text-2xl mb-4 font-semibold">Nenhuma ideia cadastrada</p>
      <Button
        label="Criar primeira"
        icon="pi pi-plus"
        icon-pos="right"
        as="router-link"
        to="/app/idea/new"
        size="small"
      />
    </template>
  </Card>
</template>
