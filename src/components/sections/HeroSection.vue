<template>
  <section aria-labelledby="hero-heading" class="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0 w-full">
    <div class="flex flex-col gap-9 items-start w-full lg:w-[390px]">
      <div class="flex flex-col gap-[13px] items-start w-full hero-animate">
        <p class="font-bold text-sm leading-5 text-moss-dark tracking-[0.1px] uppercase">
          {{ hero.eyebrow }}
        </p>
        <h1
          id="hero-heading"
          class="font-semibold text-forest text-[40px] sm:text-5xl lg:text-[56px] leading-[1.15] lg:leading-[72px] tracking-[-0.5px]"
        >
          {{ hero.headline }}
        </h1>
      </div>

      <p class="text-lg leading-6 text-stone tracking-[0.5px] hero-animate hero-animate-delay-1">
        {{ hero.description }}
      </p>

      <div class="flex flex-col gap-6 items-start w-full hero-animate hero-animate-delay-2">
        <div class="flex flex-wrap items-center gap-4">
          <BaseButton size="lg" show-arrow>
            {{ hero.primaryCta }}
          </BaseButton>
          <BaseButton size="lg" variant="secondary">
            {{ hero.secondaryCta }}
          </BaseButton>
        </div>
        <p class="font-bold text-sm leading-5 text-stone tracking-[0.1px]">
          {{ hero.note }}
        </p>
      </div>
    </div>

    <div class="w-full max-w-[495px] shrink-0 hero-animate hero-animate-delay-2 md:pl-6">
      <div aria-hidden="true" class="relative mx-auto aspect-square w-full max-w-md">
        <div class="absolute -right-6 top-6 h-56 w-56 rounded-full bg-leaf-light blur-3xl opacity-70"></div>
        <div class="absolute -left-4 bottom-8 h-44 w-44 rounded-full bg-gold/20 blur-3xl"></div>

        <div class="anim-float absolute left-4 top-10 w-56 -rotate-[6deg] rounded-2xl bg-forest p-4 text-cream shadow-2xl">
          <div class="flex items-center justify-between text-[10px] uppercase tracking-widest text-leaf">
            <span>ArusPay</span>
            <span>Tuition</span>
          </div>
          <div class="mt-6 font-serif text-xl">•••• 4821</div>
          <div class="mt-4 flex items-end justify-between text-[10px] text-cream/70">
            <span>Meridian Intl.</span>
            <span>MYR 4,500</span>
          </div>
        </div>

        <svg
          viewBox="0 0 300 300"
          class="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Animated illustration of a card tap payment"
        >
          <rect x="90" y="150" width="150" height="110" rx="14" fill="oklch(0.28 0.05 150)"></rect>
          <rect x="102" y="164" width="126" height="60" rx="6" fill="oklch(0.22 0.045 150)"></rect>
          <circle cx="165" cy="194" r="14" fill="oklch(0.86 0.15 125)" opacity="0.9"></circle>
          <path
            d="M158 194 l6 6 l10 -12"
            stroke="oklch(0.22 0.045 150)"
            stroke-width="2.5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <rect x="112" y="234" width="30" height="8" rx="2" fill="oklch(0.4 0.03 150)"></rect>
          <rect x="150" y="234" width="30" height="8" rx="2" fill="oklch(0.4 0.03 150)"></rect>
          <rect x="188" y="234" width="30" height="8" rx="2" fill="oklch(0.4 0.03 150)"></rect>

          <g style="transform-origin: 165px 130px;">
            <circle
              class="anim-ripple"
              cx="165"
              cy="130"
              r="20"
              fill="none"
              stroke="oklch(0.72 0.14 65)"
              stroke-width="2"
              style="animation-delay: 0s;"
            ></circle>
            <circle
              class="anim-ripple"
              cx="165"
              cy="130"
              r="20"
              fill="none"
              stroke="oklch(0.72 0.14 65)"
              stroke-width="2"
              style="animation-delay: 0.8s;"
            ></circle>
            <circle
              class="anim-ripple"
              cx="165"
              cy="130"
              r="20"
              fill="none"
              stroke="oklch(0.72 0.14 65)"
              stroke-width="2"
              style="animation-delay: 1.6s;"
            ></circle>
          </g>

          <g class="anim-tap">
            <rect x="130" y="90" width="90" height="58" rx="8" fill="oklch(0.72 0.14 65)"></rect>
            <rect x="138" y="100" width="26" height="18" rx="3" fill="oklch(0.92 0.09 125)"></rect>
            <rect x="138" y="128" width="60" height="4" rx="2" fill="oklch(1 0 0 / 0.6)"></rect>
            <rect x="138" y="136" width="40" height="4" rx="2" fill="oklch(1 0 0 / 0.5)"></rect>
          </g>

          <g>
            <circle class="anim-coin" cx="255" cy="70" r="8" fill="oklch(0.86 0.15 125)" style="animation-delay: 0.3s;"></circle>
            <circle class="anim-coin" cx="60" cy="60" r="6" fill="oklch(0.72 0.14 65)" style="animation-delay: 1.1s;"></circle>
            <circle class="anim-coin" cx="40" cy="120" r="5" fill="oklch(0.86 0.15 125)" style="animation-delay: 1.9s;"></circle>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { hero } from '../../data/landing.js'
</script>
