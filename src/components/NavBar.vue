<template>
  <nav class="navbar-animate fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-md border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2.5">
          <img src="/aruspay-logo.png" alt="ArusPay" class="w-9 h-9 rounded-[10px]" />
          <span class="text-2xl font-extrabold tracking-tight leading-none">
            <span class="text-white">Arus</span><span class="text-leaf">Pay</span>
          </span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <NavItem v-for="item in navItems" :key="item.label" :item="item" />
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-3">
          <button class="hidden md:block bg-gold hover:bg-gold-dark text-forest text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gold/30">
            Contact Us
          </button>
          <!-- Mobile menu button -->
          <button @click="mobileOpen = !mobileOpen" class="md:hidden text-white/70 hover:text-white p-2">
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden bg-forest-2 border-t border-white/10 px-6 py-4 space-y-2">
        <a v-for="item in navItems" :key="item.label" href="#"
          class="flex items-center justify-between text-white/80 hover:text-white py-2 text-sm font-medium">
          {{ item.label }}
          <svg v-if="item.dropdown" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <button class="w-full mt-4 bg-gold hover:bg-gold-dark text-forest text-sm font-bold py-2.5 rounded-lg transition-colors">
          Contact Us
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import NavItem from './NavItem.vue'

const mobileOpen = ref(false)

const navItems = [
  { label: 'Solutions', dropdown: true },
  { label: 'Developers', dropdown: true },
  { label: 'Company', dropdown: true },
  { label: 'Resources', dropdown: true },
]
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
