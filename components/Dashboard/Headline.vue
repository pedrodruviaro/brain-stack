<script setup lang="ts">
const props = defineProps<{
  name: string
  avatarUrl: string
}>()
</script>

<template>
  <section>
    <Card>
      <template #content>
        <div class="flex flex-wrap gap-4 items-center justify-between">
          <div class="flex flex-wrap gap-2 items-center">
            <Avatar :image="props.avatarUrl" size="xlarge" shape="circle" />
            <BaseTitle :label="props.name" size="lg" />
          </div>

          <div>
            <Button
              size="small"
              label="Compartilhar perfil"
              icon="pi pi-share-alt"
              outlined
            />
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>
