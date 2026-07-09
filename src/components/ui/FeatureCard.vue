<template>
  <article
    :class="[
      'flex flex-col items-start justify-center rounded-[20px] px-10 py-[26px] w-full lg:w-[370.667px]',
      variant === 'dark'
        ? 'bg-forest-2 text-cream'
        : 'bg-white border border-line text-forest',
    ]"
  >
    <div class="flex flex-col gap-3 items-start w-full max-w-[240px]">
      <FeatureIcon :name="icon" :variant="variant" />
      <h3
        :class="[
          'text-xl leading-normal',
          variant === 'dark' ? 'text-cream' : 'text-forest',
        ]"
      >
        {{ title }}
      </h3>
      <p
        :class="[
          'text-[14.5px] leading-5',
          variant === 'dark' ? 'text-[#b7c2b4]' : 'text-stone',
        ]"
      >
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script setup>
import FeatureIcon from './FeatureIcon.vue'

defineProps({
  variant: {
    type: String,
    required: true,
    validator: (value) => ['dark', 'light'].includes(value),
  },
  icon: {
    type: String,
    required: true,
    validator: (value) => ['local-rails', 'borders', 'human-support'].includes(value),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
