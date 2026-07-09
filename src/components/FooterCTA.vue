<template>
  <footer>
    <!-- CTA Banner -->
    <div class="bg-forest relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-moss/10 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div v-reveal="'fade-left'" class="flex items-start gap-5">
            <div class="w-14 h-14 bg-moss/20 border border-moss/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 class="font-sans text-2xl lg:text-3xl font-medium text-white">Let's Build the Future of Payments, Together</h2>
              <p class="text-white/50 mt-1.5 text-sm">Connect with our team to explore how ArusPay can power your business growth.</p>
            </div>
          </div>

          <div v-reveal="{ animation: 'fade-right', delay: 150 }" class="flex flex-wrap gap-3 flex-shrink-0">
            <button class="group flex items-center gap-2 bg-gold hover:bg-gold-dark text-forest font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gold/20">
              Contact Sales
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a href="mailto:hello@aruspay.com" class="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium px-4 py-3 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@aruspay.com
            </a>
            <a href="https://aruspay.com" class="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium px-4 py-3 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
              aruspay.com
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div v-reveal="'fade-up'" class="bg-forest-2 py-5">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <img src="/aruspay-logo.png" alt="ArusPay" class="w-5 h-5 rounded-[6px]" />
          <span class="font-bold text-sm"><span class="text-white">Arus</span><span class="text-leaf">Pay</span></span>
          <span class="text-white/30 text-xs ml-2">© 2026 ArusPay. All rights reserved.</span>
        </div>
        <div class="flex items-center gap-6">
          <a v-for="link in footerLinks" :key="link" href="#" class="text-white/40 hover:text-white/70 text-xs transition-colors">{{ link }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
</script>
