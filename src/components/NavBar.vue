<template>
  <header class="navbar-animate w-full">
    <div class="nav-glow-ring">
      <nav
        aria-label="Primary"
        class="nav-glow-inner bg-white rounded-[28px] shadow-[0px_10px_2px_rgba(0,0,0,0.25)] h-[72px] px-5 py-5"
      >
        <div class="flex items-center justify-between h-full px-3">
        <AppLogo href="#" />

        <ul class="hidden lg:flex items-center gap-[41px] list-none">
          <li v-for="item in navLinks" :key="item.label">
            <a
              :href="item.href"
              class="text-forest font-bold text-[12.5px] leading-normal hover:text-moss transition-colors"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-2.5 shrink-0">
          <a
            href="#login"
            class="hidden sm:block text-forest font-bold text-[12.5px] leading-normal hover:text-moss transition-colors"
          >
            Log in
          </a>
          <BaseButton size="sm" show-arrow>
            Book a demo
          </BaseButton>

          <button
            type="button"
            class="lg:hidden text-forest p-1"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-navigation"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        </div>
      </nav>
    </div>

    <Transition name="mobile-menu">
      <nav
        v-if="mobileOpen"
        id="mobile-navigation"
        aria-label="Mobile"
        class="lg:hidden mt-2 bg-white rounded-2xl shadow-[0px_10px_2px_rgba(0,0,0,0.08)] px-6 py-4"
      >
        <ul class="space-y-1 list-none">
          <li v-for="item in navLinks" :key="item.label">
            <a
              :href="item.href"
              class="block text-forest font-bold text-sm py-2 hover:text-moss transition-colors"
            >
              {{ item.label }}
            </a>
          </li>
          <li>
            <a href="#login" class="block text-forest font-bold text-sm py-2 hover:text-moss transition-colors">
              Log in
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import AppLogo from './ui/AppLogo.vue'
import BaseButton from './ui/BaseButton.vue'
import { navLinks } from '../data/landing.js'

const mobileOpen = ref(false)
</script>

<style scoped>
.nav-glow-ring {
  position: relative;
  border-radius: 30px;
  padding: 2px;
  isolation: isolate;
  overflow: hidden;
}

.nav-glow-ring::before {
  content: '';
  position: absolute;
  inset: -120%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 60deg,
    var(--color-leaf-light) 120deg,
    var(--color-leaf) 180deg,
    var(--color-moss) 240deg,
    var(--color-leaf-light) 300deg,
    transparent 360deg
  );
  animation: navGlowSpin 5s linear infinite;
  z-index: 0;
}

.nav-glow-ring::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 30px;
  box-shadow:
    0 0 18px color-mix(in srgb, var(--color-leaf) 35%, transparent),
    0 0 36px color-mix(in srgb, var(--color-moss) 18%, transparent);
  z-index: 0;
  pointer-events: none;
  animation: navGlowPulse 5s ease-in-out infinite;
}

.nav-glow-inner {
  position: relative;
  z-index: 1;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
