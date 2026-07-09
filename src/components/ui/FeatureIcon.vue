<template>
  <svg
    :class="className"
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :aria-label="ariaLabel"
    role="img"
  >
    <rect
      width="46"
      height="46"
      rx="12"
      :fill="backgroundFill"
    />

    <!-- Local rails: payment flow through connected nodes -->
    <g v-if="name === 'local-rails'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="16" cy="23" r="3" fill="currentColor" stroke="none" />
      <circle cx="30" cy="23" r="3" fill="currentColor" stroke="none" />
      <path d="M19 23h8" />
      <path d="M13 17v12" />
      <path d="M33 17v12" />
    </g>

    <!-- Borders: globe with meridians -->
    <g v-else-if="name === 'borders'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="23" cy="23" r="9" />
      <path d="M14 23h18" />
      <path d="M23 14c3 2.5 4.5 5.5 4.5 9s-1.5 6.5-4.5 9" />
      <path d="M23 14c-3 2.5-4.5 5.5-4.5 9s1.5 6.5 4.5 9" />
    </g>

    <!-- Human support: person with headset -->
    <g v-else-if="name === 'human-support'" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 27v2a2 2 0 0 0 2 2h1" />
      <path d="M30 27v2a2 2 0 0 1-2 2h-1" />
      <path d="M18 20a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0v-4z" />
      <path d="M14 24h2a2 2 0 0 0 2-2v-1" />
      <path d="M32 24h-2a2 2 0 0 1-2-2v-1" />
      <circle cx="23" cy="18" r="2" fill="currentColor" stroke="none" />
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value) => ['local-rails', 'borders', 'human-support'].includes(value),
  },
  variant: {
    type: String,
    required: true,
    validator: (value) => ['dark', 'light'].includes(value),
  },
  className: {
    type: String,
    default: 'w-[46px] h-[46px] shrink-0',
  },
})

const backgroundFill = computed(() =>
  props.variant === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#D6E9C6',
)

const iconColor = computed(() =>
  props.variant === 'dark' ? '#A3CB8B' : '#3A5F3E',
)

const ariaLabel = computed(() => {
  const labels = {
    'local-rails': 'Local payment rails icon',
    borders: 'International borders icon',
    'human-support': 'Human support icon',
  }
  return labels[props.name]
})
</script>

<style scoped>
svg {
  color: v-bind(iconColor);
}
</style>
