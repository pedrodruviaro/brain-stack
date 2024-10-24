<script setup lang="ts">
type Variants = "white" | "dark" | "hybrid" | "hybrid-dark"

type ImageToRender = {
  [key in Variants]: string
}

const props = withDefaults(
  defineProps<{
    variant?: Variants
  }>(),
  { variant: "white" }
)

const imageToRender: ImageToRender = {
  white: "logo-white",
  dark: "logo-dark",
  hybrid: "logo-pink",
  "hybrid-dark": "logo-dark-pink",
}
</script>

<template>
  <span class="block max-w-max">
    <img
      :src="`/images/${imageToRender[props.variant]}.svg`"
      aria-hidden="true"
      alt=""
    />
  </span>
</template>
