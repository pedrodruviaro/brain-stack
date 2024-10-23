<script setup lang="ts">
const confirm = useConfirm()
const { logout } = useAuthActions()

const handleLogout = () => {
  confirm.require({
    message: "Deseja realmente sair da aplicação?",
    header: "Confirmando",
    rejectProps: {
      label: "Voltar",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "Confirmar",
    },
    position: "top",

    accept: async () => {
      await logout()
      router.push("/")
    },
  })
}

const router = useRouter()

const menuItems = [
  {
    label: "BrainStack",

    items: [
      {
        label: "Minhas ideias",
        icon: "pi pi-lightbulb",
        command: () => router.push("/app"),
      },
      {
        label: "Criar nova ideia",
        icon: "pi pi-plus",
        command: () => router.push("/app/idea/new"),
      },
      {
        separator: true,
      },
      {
        label: "Sair",
        icon: "pi pi-sign-out",
        command: () => handleLogout(),
      },
    ],
  },
]

const menu = ref()

const toggle = (event: Event) => menu.value.toggle(event)
</script>

<template>
  <header class="py-3 shadow-sm">
    <BaseContainer class="flex items-center justify-between gap-3 flex-wrap">
      <NuxtLink to="/app" class="max-w-28 block">
        <div>
          <Logo variant="dark" />
        </div>
      </NuxtLink>

      <div class="flex items-center gap-2 flex-1 justify-end">
        <Button
          icon="pi pi-plus"
          aria-label="Save"
          size="small"
          outlined
          v-tooltip="'Criar nova ideia'"
          as="router-link"
          to="/app/idea/new"
        />

        <div>
          <Button
            size="small"
            type="button"
            icon="pi pi-ellipsis-v"
            aria-haspopup="true"
            aria-controls="overlay_menu"
            @click="toggle"
          />
          <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
        </div>
      </div>
    </BaseContainer>

    <ConfirmDialog />
  </header>
</template>
