<template>
  <section class="relative min-h-screen overflow-hidden flex items-center pt-16">
    <!-- Full-bleed background image -->
    <div class="absolute inset-0 hero-bg-animate">
      <img
        src="/hero-bg.png"
        alt=""
        class="w-full h-full object-cover object-center [filter:hue-rotate(-95deg)_saturate(0.65)_brightness(0.85)]"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/40"></div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
      <div class="max-w-2xl space-y-8">
        <div class="space-y-4 hero-animate">
          <h1 class="font-display text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tight">
            Powering the Flow<br />
            of <span class="text-transparent bg-clip-text bg-gradient-to-r from-leaf to-gold">Digital Commerce</span>
          </h1>
          <p class="text-lg text-white/65 leading-relaxed max-w-lg">
            ArusPay is Southeast Asia's payment infrastructure platform — built to move money seamlessly, securely, and intelligently across businesses, borders, and ecosystems.
          </p>
        </div>

        <div class="flex flex-wrap gap-4 hero-animate hero-animate-delay-2">
          <button class="group flex items-center gap-2 bg-gold hover:bg-gold-dark text-forest font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5">
            Start Integrating
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button class="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5">
            Talk to Sales
          </button>
        </div>

        <div class="inline-flex flex-wrap items-center gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hero-animate hero-animate-delay-3">
          <TrustBadge
            v-for="(badge, i) in badges"
            :key="badge.label"
            :badge="badge"
            :first="i === 0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TrustBadge from './TrustBadge.vue'

const badges = [
  { icon: 'shield', label: 'Secure', sub: 'by Design' },
  { icon: 'scalable', label: 'Scalable', sub: 'Infrastructure' },
  { icon: 'globe', label: 'Regional', sub: 'Connectivity' },
  { icon: 'bolt', label: 'Developer', sub: 'Friendly' },
]
</script>
