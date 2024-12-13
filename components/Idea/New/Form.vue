<script setup lang="ts">
import { TEMPLATE_DEFAULT } from "~/constants/defaultIdeaTemplate"
import type { EditorLoadEvent } from "primevue/editor"
import type { ZodFormattedError } from "zod"
import type { Idea } from "~/entities/Idea/Idea"

const props = defineProps<{
  loading: boolean
  errors?: ZodFormattedError<Idea>
}>()

const emits = defineEmits<{
  (e: "open-preview"): void
}>()

const title = defineModel<string>("title")
const content = defineModel<string>("content")

const onEditorLoad = ({ instance }: EditorLoadEvent) => {
  instance.setContents(
    instance.clipboard.convert({
      html: content.value,
    })
  )
}

const toast = useToast()
const editorRef = ref()

const handleSetDefaultTemplate = () => {
  if (content.value === undefined) return

  if (content.value.trim() !== "") {
    toast.add({
      severity: "secondary",
      summary: "Atenção",
      detail: "Limpe o editor antes de aplicar o template",
      life: 2000,
    })

    return
  }

  content.value = TEMPLATE_DEFAULT

  if (editorRef.value?.quill) {
    editorRef.value.quill.clipboard.dangerouslyPasteHTML(TEMPLATE_DEFAULT)
  }
}
</script>

<template>
  <div class="space-y-4">
    <div class="grid gap-2 md:grid-cols-[1fr_max-content]">
      <div class="w-full">
        <FloatLabel variant="on">
          <InputText id="title" size="small" class="w-full" v-model="title" />
          <label for="title">Título da ideia</label>
        </FloatLabel>
        <span
          class="text-sm text-red-600 opacity-90"
          v-if="props.errors?.title"
          >{{ props.errors.title._errors[0] }}</span
        >
      </div>

      <Button
        icon="pi pi-eye"
        aria-label="Visualização"
        v-tooltip="'Abrir preview'"
        size="small"
        outlined
        @click="emits('open-preview')"
      />
    </div>

    <div class="space-y-2">
      <Button
        size="small"
        label="Usar template de ideia"
        outlined
        @click="handleSetDefaultTemplate"
      />
      <Editor
        v-model="content"
        editorStyle="height: 320px"
        ref="editorRef"
        @load="onEditorLoad"
      />
      <span
        class="text-sm text-red-600 opacity-90"
        v-if="props.errors?.content"
        >{{ props.errors.content._errors[0] }}</span
      >
    </div>
  </div>
</template>
