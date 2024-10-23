<script setup lang="ts">
type Sizes = "sm" | "md" | "lg"

type TitleSize = {
  [key in Sizes]: string
}

interface Props {
  as?: string
  center?: boolean
  size?: Sizes
  decoration?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "h2",
  center: false,
  size: "md",
  decoration: false,
})

const titleSize: TitleSize = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-3xl",
}
</script>

<template>
  <Component
    :is="props.as"
    class="relative max-w-max font-bold"
    :class="[{ 'mx-auto text-center': props.center }, titleSize[props.size]]"
  >
    <template v-if="props.label">{{ props.label }}</template>
    <slot v-else />

    <span
      v-if="props.decoration"
      class="w-6 h-1 block absolute left-0 -bottom-0 bg-pink-500 rounded-sm"
    ></span>
  </Component>
</template>
