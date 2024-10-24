<script setup lang="ts">
definePageMeta({
  layout: "auth",
})

useSeoMeta({
  title: "Meu App",
})

const { user } = useLoggedUser()

const { ideas, totalIdeas, loading, loadingMore, fetchMoreIdeas } = useIdeaList(
  {
    user,
  }
)

const { arrivedState } = useScroll(window, { offset: { bottom: 75 } })
watch(
  () => arrivedState.bottom,
  () => {
    if (!arrivedState.bottom) return
    fetchMoreIdeas()
  }
)

const router = useRouter()
const handleEdit = (id: string) => router.push(`/app/idea/edit/${id}`)

const { shareUrl } = useShareAction()
const handleShare = async (id: string) => await shareUrl(`idea/${id}`)
</script>

<template>
  <div>
    <DashboardHeadline
      v-if="user"
      :name="user?.name"
      :avatarUrl="user?.avatarUrl"
      :ideasCount="totalIdeas"
      :loading="loading"
      :createdAt="user.createdAt"
    />

    <BaseTitle decoration size="md" label="Minhas ideias" class="mt-10 mb-4" />
    <IdeaListLoader :loading="loading" :count="4" v-if="ideas.length !== 0">
      <IdeaList>
        <IdeaListCard
          v-for="idea in ideas"
          :key="idea.id"
          :id="idea.id"
          :title="idea.title"
          :createdAt="idea.createdAt"
          @edit="handleEdit"
          @share="handleShare"
        />
      </IdeaList>
    </IdeaListLoader>

    <IdeaListEmpty v-else />

    <div class="mx-auto flex justify-center mt-8" v-show="loadingMore">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
  </div>
</template>
