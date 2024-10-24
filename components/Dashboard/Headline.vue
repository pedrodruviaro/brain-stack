<script setup lang="ts">
const props = defineProps<{
  name: string
  avatarUrl: string
  ideasCount: number | string
  loading: boolean
  createdAt: Date
}>()

const memberSince = computed(() => {
  const message = "Membro desde"
  const date = new Date(props.createdAt).toLocaleDateString("pt-BR")
  return `${message} ${date}`
})
</script>

<template>
  <section>
    <Card>
      <template #content>
        <div class="flex flex-wrap gap-4 items-center justify-between">
          <div>
            <div class="flex flex-wrap gap-2 items-center">
              <Avatar :image="props.avatarUrl" size="xlarge" shape="circle" />
              <BaseTitle :label="props.name" size="lg" />
            </div>
            <Chip class="mt-4" icon="pi pi-user" :label="memberSince" />
          </div>

          <div>
            <Card>
              <template #content>
                <div v-if="props.loading">
                  <Skeleton width="100%" height="3rem" />
                  <Skeleton width="100%" height="1.5rem" />
                </div>
                <div v-else>
                  <p class="font-semibold text-lg text-center">
                    Ideias criadas
                  </p>
                  <p class="font-bold text-pink-400 text-3xl text-center">
                    {{ props.ideasCount }}
                  </p>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>
