<template>
  <div class="relative" @mouseenter="open = true" @mouseleave="open = false">
    <button class="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-colors duration-150">
      {{ item.label }}
      <svg v-if="item.dropdown" class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ item: Object })
const open = ref(false)
</script>
