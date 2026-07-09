<template>
  <div class="min-h-screen bg-cream">
    <div class="sticky top-4 z-50 pt-[30px] px-6 sm:px-10 lg:px-[138px]">
      <div class="mx-auto w-full max-w-[1162px]">
        <NavBar />
      </div>
    </div>

    <header class="w-full px-6 sm:px-10 lg:px-[138px] pt-[69px] pb-[60px]">
      <div class="mx-auto w-full max-w-[1162px] flex flex-col gap-[69px]">
        <HeroSection />
        <TrustBar :heading="trustBar.heading" :schools="trustBar.schools" />
      </div>
    </header>

    <main>
      <ValuePropositionSection />
      <HowItWorksSection />
      <TestimonialSection />
      <CtaSection />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import TrustBar from './components/sections/TrustBar.vue'
import ValuePropositionSection from './components/sections/ValuePropositionSection.vue'
import HowItWorksSection from './components/sections/HowItWorksSection.vue'
import TestimonialSection from './components/sections/TestimonialSection.vue'
import CtaSection from './components/sections/CtaSection.vue'
import SiteFooter from './components/sections/SiteFooter.vue'
import { trustBar } from './data/landing.js'
</script>
