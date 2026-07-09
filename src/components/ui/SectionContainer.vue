<template>
  <component
    :is="tag"
    :class="[
      'w-full',
      backgroundClass,
      paddingClass,
    ]"
  >
    <div :class="['mx-auto w-full max-w-[1162px]', innerClass]">
      <slot />
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'section',
  },
  background: {
    type: String,
    default: 'cream',
    validator: (value) => ['cream', 'forest-2', 'transparent'].includes(value),
  },
  padding: {
    type: String,
    default: 'default',
    validator: (value) => ['none', 'compact', 'default', 'hero-top', 'footer'].includes(value),
  },
  innerClass: {
    type: String,
    default: '',
  },
})

const backgroundClass = computed(() => {
  if (props.background === 'forest-2') return 'bg-forest-2'
  if (props.background === 'transparent') return 'bg-transparent'
  return 'bg-cream'
})

const paddingClass = computed(() => {
  const map = {
    none: 'px-6 sm:px-10 lg:px-[138px]',
    compact: 'px-6 sm:px-10 lg:px-[138px] py-10 lg:py-[60px]',
    default: 'px-6 sm:px-10 lg:px-[138px] py-10 lg:py-[60px]',
    'hero-top': 'px-6 sm:px-10 lg:px-[138px] pt-[30px] pb-[60px]',
    footer: 'px-6 sm:px-10 lg:px-[138px] py-10',
  }

  return map[props.padding]
})
</script>
