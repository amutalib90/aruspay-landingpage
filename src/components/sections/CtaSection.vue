<template>
  <SectionContainer
    id="pricing"
    background="forest-2"
    padding="default"
    inner-class="flex flex-col gap-10 lg:gap-[60px] items-center justify-center text-center"
  >
    <header class="flex flex-col gap-3 items-center w-full">
      <h2 class="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] tracking-[0.25px] text-cream">
        {{ cta.heading }}
      </h2>
      <div class="font-bold text-base leading-6 text-[#b7c2b4] tracking-[0.15px]">
        <p v-for="(line, index) in cta.lines" :key="index">{{ line }}</p>
      </div>
    </header>

    <BaseButton size="lg" show-arrow>
      {{ cta.button }}
    </BaseButton>
  </SectionContainer>
</template>

<script setup>
import SectionContainer from '../ui/SectionContainer.vue'
import BaseButton from '../ui/BaseButton.vue'
import { cta } from '../../data/landing.js'
</script>
