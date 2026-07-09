<template>
  <SectionContainer
    id="for-schools"
    tag="section"
    background="forest-2"
    padding="default"
    inner-class="flex flex-col gap-10 lg:gap-[60px]"
  >
    <header class="flex flex-col gap-3 items-start">
      <p class="font-bold text-sm leading-5 text-leaf tracking-[0.1px] uppercase">
        {{ howItWorks.eyebrow }}
      </p>
      <h2 class="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] tracking-[0.25px] text-cream">
        {{ howItWorks.heading }}
      </h2>
    </header>

    <hr class="border-0 border-t border-leaf/20 w-full" />

    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 w-full">
      <StepItem
        v-for="step in howItWorks.steps"
        :key="step.number"
        :number="step.number"
        :title="step.title"
        :description="step.description"
      />
    </div>
  </SectionContainer>
</template>

<script setup>
import SectionContainer from '../ui/SectionContainer.vue'
import StepItem from '../ui/StepItem.vue'
import { howItWorks } from '../../data/landing.js'
</script>
