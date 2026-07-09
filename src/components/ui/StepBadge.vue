<template>
  <div
    class="relative w-10 h-10 shrink-0"
    aria-hidden="true"
  >
    <div class="absolute inset-0 rounded-full border border-leaf/60"></div>
    <span class="absolute inset-0 flex items-center justify-center font-serif text-sm text-leaf">
      {{ number }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
})
</script>
