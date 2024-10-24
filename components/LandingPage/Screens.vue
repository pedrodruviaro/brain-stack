<script setup lang="ts">
const images = ref([
  {
    src: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
    alt: "",
  },
  {
    src: "https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg",
    alt: "",
  },
])
const activeIndex = ref(0)

const next = () => {
  activeIndex.value =
    activeIndex.value === images.value.length - 1
      ? images.value.length - 1
      : activeIndex.value + 1
}
const prev = () => {
  activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1
}
</script>

<template>
  <section class="flex justify-center flex-col items-center gap-2 py-16">
    <Galleria
      :value="images"
      v-model:activeIndex="activeIndex"
      :numVisible="5"
      containerStyle="max-width: 640px"
      :showThumbnails="false"
      :showIndicators="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.src"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
    </Galleria>

    <div class="flex justify-center">
      <Button icon="pi pi-angle-left" @click="prev" outlined />
      <Button icon="pi pi-angle-right" @click="next" outlined class="ml-2" />
    </div>
  </section>
</template>
