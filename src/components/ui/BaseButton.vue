<template>
  <component
    :is="tag"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :class="buttonClasses"
  >
    <span :class="labelPaddingClass">
      <slot />
    </span>
    <ArrowIcon v-if="showArrow" :size="arrowSize" :class="arrowClass" />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import ArrowIcon from './ArrowIcon.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'lg'].includes(value),
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'button',
  },
})

const tag = computed(() => (props.href ? 'a' : 'button'))

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center overflow-hidden rounded-[12px] font-button transition-colors duration-200'

  const sizes = {
    sm: 'h-8 px-3 py-2 text-xs leading-4',
    lg: 'h-12 px-5 py-3.5 text-base leading-5',
  }

  const variants = {
    primary: 'bg-gold text-cream hover:bg-gold-dark',
    secondary: 'border border-forest text-forest hover:bg-forest hover:text-cream',
  }

  const group = props.showArrow ? 'group' : ''

  return [base, sizes[props.size], variants[props.variant], group].join(' ')
})

const labelPaddingClass = computed(() => (props.size === 'sm' ? 'px-2' : 'px-2'))

const arrowSize = computed(() => (props.size === 'sm' ? 'sm' : 'lg'))

const arrowClass = computed(() =>
  props.showArrow ? 'group-hover:translate-x-0.5 transition-transform' : '',
)
</script>
