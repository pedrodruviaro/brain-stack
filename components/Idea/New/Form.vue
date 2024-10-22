<script setup lang="ts">
import type { EditorLoadEvent } from "primevue/editor"
import { TEMPLATE_DEFAULT } from "~/constants/defaultIdeaTemplate"

const props = defineProps<{
  loading: boolean
}>()

const emits = defineEmits<{
  (e: "open-preview"): void
  (e: "create"): void
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
  <div>
    <div class="grid gap-2 md:grid-cols-[1fr_max-content]">
      <div class="w-full">
        <FloatLabel variant="on">
          <InputText id="title" size="small" class="w-full" v-model="title" />
          <label for="title">Título da ideia</label>
        </FloatLabel>
      </div>

      <div>
        <Button
          icon="pi pi-eye"
          aria-label="Visualização"
          v-tooltip="'Abrir preview'"
          size="small"
          outlined
          @click="emits('open-preview')"
        />

        <Button
          size="small"
          label="Usar template"
          @click="handleSetDefaultTemplate"
        />
      </div>
    </div>

    <Editor
      v-model="content"
      editorStyle="height: 320px"
      ref="editorRef"
      @load="onEditorLoad"
    />

    <Button
      label="Criar ideia"
      icon="pi pi-plus"
      icon-pos="right"
      :loading="props.loading"
      @click="emits('create')"
    />
  </div>
</template>
