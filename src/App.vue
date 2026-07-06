<template>
  <div class="min-h-screen">
    <NavBar />
    <main>
      <HeroSection />
      <MissionVision />
      <WhatWeRepresent />
      <PlatformSection />
      <EcosystemSection />
    </main>
    <FooterCTA />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MissionVision from './components/MissionVision.vue'
import WhatWeRepresent from './components/WhatWeRepresent.vue'
import PlatformSection from './components/PlatformSection.vue'
import EcosystemSection from './components/EcosystemSection.vue'
import FooterCTA from './components/FooterCTA.vue'
</script>
