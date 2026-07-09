<template>
  <article class="flex flex-col gap-3 items-start w-full max-w-[240px]">
    <StepBadge :number="number" />
    <h3 class="font-semibold text-2xl leading-8 text-cream">
      {{ title }}
    </h3>
    <div class="text-[14.5px] leading-5 text-[#b7c2b4]">
      <p v-if="typeof description === 'string'">{{ description }}</p>
      <template v-else>
        <p v-for="(line, index) in description" :key="index">{{ line }}</p>
      </template>
    </div>
  </article>
</template>

<script setup>
import StepBadge from './StepBadge.vue'

defineProps({
  number: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: [String, Array],
    required: true,
  },
})
</script>
