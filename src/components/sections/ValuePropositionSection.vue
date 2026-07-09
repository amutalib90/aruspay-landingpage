<template>
  <SectionContainer id="product" background="cream" padding="default" inner-class="flex flex-col gap-10">
    <div class="flex flex-col gap-1.5 items-center text-center w-full">
      <p
        v-for="(line, index) in valueProposition.intro"
        :key="index"
        :class="[
          'text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] tracking-[0.25px] max-w-[564px] px-2.5',
          line.tone === 'muted' ? 'text-stone' : 'text-forest',
        ]"
      >
        {{ line.text }}
      </p>
    </div>

    <div class="flex flex-col gap-9 w-full">
      <h2 class="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] tracking-[0.25px] text-forest">
        <span class="block">{{ valueProposition.heading[0] }}</span>
        <span class="block">{{ valueProposition.heading[1] }}</span>
      </h2>

      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">
        <FeatureCard
          v-for="feature in valueProposition.features"
          :key="feature.title"
          :variant="feature.variant"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </SectionContainer>
</template>

<script setup>
import SectionContainer from '../ui/SectionContainer.vue'
import FeatureCard from '../ui/FeatureCard.vue'
import { valueProposition } from '../../data/landing.js'
</script>
