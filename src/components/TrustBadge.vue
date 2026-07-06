<template>
  <div class="relative flex items-center gap-3 px-5 py-3.5">
    <!-- Divider between items (not before first) -->
    <div v-if="!first" class="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-white/15"></div>

    <!-- Icon -->
    <div class="flex-shrink-0 text-white/80">
      <!-- Shield -->
      <svg v-if="badge.icon === 'shield'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      <!-- Scalable (bar chart) -->
      <svg v-else-if="badge.icon === 'scalable'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <!-- Globe -->
      <svg v-else-if="badge.icon === 'globe'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <!-- Bolt / Lightning -->
      <svg v-else-if="badge.icon === 'bolt'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>

    <!-- Text -->
    <div class="leading-none">
      <div class="text-white font-semibold text-sm">{{ badge.label }}</div>
      <div class="text-white/50 text-xs mt-0.5">{{ badge.sub }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: Object,
  first: Boolean,
})
</script>
