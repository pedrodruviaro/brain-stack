<script setup lang="ts">
definePageMeta({
  layout: "auth",
})

useSeoMeta({
  title: "Edite a sua ideia",
})

const router = useRouter()
const route = useRoute()
const ideaId = computed(() => route.params.id as string)

/*
cannot use useLoggerUser bc only runs on CS -> using supabase composable instead
const { user } = useLoggedUser() 
 */

const services = useServices()

const { data: idea } = await useAsyncData("idea", async () => {
  return await services.idea.readOne(ideaId.value)
})

const user = useSupabaseUser()

// Rule -> cannot edit If not owner
if (!idea.value || idea.value.profileId !== user.value?.id) {
  router.push("/app")
  console.log("nao pode editar")
}

const { loading, title, content, errors, update, safeParse } = useIdeaUpdate({
  idea,
})

const handleUpdate = async () => {
  const isValid = safeParse().success
  if (!isValid) return

  await update()
}

const { removeIdea } = useIdeaDelete(ideaId.value)
const confirm = useConfirm()

const handleDelete = async () => {
  confirm.require({
    header: "Tem certeza que deseja apagar essa ideia?",
    message: "Isso não pode ser revertido",
    icon: "pi pi-info-circle",
    position: "bottom",
    rejectProps: {
      label: "Voltar",
      severity: "secondary",
      text: true,
    },
    acceptProps: {
      label: "Apagar",
      text: true,
    },
    accept: async () => await removeIdea(),
  })
}

const isPreviewOpen = ref(false)
</script>

<template>
  <div>
    <BaseTitle as="h1" label="Edite a sua Ideia" class="mb-6" decoration />

    <IdeaNewForm
      v-model:title="title"
      v-model:content="content"
      :loading="loading"
      :errors="errors"
      @open-preview="isPreviewOpen = true"
    />

    <div class="flex gap-4 flex-wrap items-center mt-6">
      <Button
        label="Salvar edição"
        size="small"
        :loading="loading"
        @click="handleUpdate"
      />

      <Button
        label="Apagar Ideia"
        severity="danger"
        size="small"
        @click="handleDelete"
      />
    </div>

    <LazyDialog
      v-model:visible="isPreviewOpen"
      maximizable
      modal
      :header="title"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <LazyProse>
        <div v-html="content" />
      </LazyProse>
    </LazyDialog>
  </div>
</template>
