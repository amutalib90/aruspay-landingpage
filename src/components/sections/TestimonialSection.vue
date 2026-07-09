<template>
  <SectionContainer background="cream" padding="default">
    <figure class="flex flex-col gap-10 items-center justify-center text-center w-full px-2.5 py-0">
      <blockquote class="max-w-[564px]">
        <p class="font-serif text-[70px] leading-none text-leaf h-11" aria-hidden="true">“</p>
        <p class="text-[28px] sm:text-[34px] leading-[36px] sm:leading-[42px] tracking-[0.25px] text-forest">
          {{ testimonial.quote }}
        </p>
      </blockquote>
      <figcaption class="max-w-[564px] text-forest">
        <p class="font-bold text-base leading-6 tracking-[0.5px]">
          {{ testimonial.author }}
        </p>
        <p class="font-medium text-sm leading-5 tracking-[0.25px]">
          {{ testimonial.role }}
        </p>
      </figcaption>
    </figure>
  </SectionContainer>
</template>

<script setup>
import SectionContainer from '../ui/SectionContainer.vue'
import { testimonial } from '../../data/landing.js'
</script>
