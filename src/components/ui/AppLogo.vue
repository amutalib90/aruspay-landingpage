<template>
  <component :is="tag" :href="href" class="inline-flex items-center gap-2.5 shrink-0">
    <img
      src="/aruspay-logo.png"
      alt=""
      :class="iconSizeClass"
      class="rounded-[8px]"
      aria-hidden="true"
    />
    <span
      class="font-bold text-base tracking-[0.32px] text-transparent bg-clip-text bg-gradient-to-r from-forest from-[23.723%] to-[#80a363] to-[76.493%]"
    >
      ArusPay
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg'].includes(value),
  },
})

const tag = computed(() => (props.href ? 'a' : 'div'))

const iconSizeClass = computed(() => (props.size === 'lg' ? 'w-8 h-8' : 'w-8 h-8'))
</script>
