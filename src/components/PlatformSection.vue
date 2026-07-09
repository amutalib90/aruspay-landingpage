<template>
  <section class="bg-cream py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left -->
        <div v-reveal="'fade-left'" class="space-y-6">
          <div>
            <p class="text-moss text-xs font-bold uppercase tracking-widest mb-3">OUR PLATFORM</p>
            <div class="flex items-baseline gap-1 mb-1">
              <span class="text-4xl font-black text-forest">Arus</span>
              <span class="text-4xl font-black text-moss">Pay</span>
            </div>
            <h2 class="font-sans text-2xl font-medium text-forest mb-4">Unified. Intelligent. Limitless.</h2>
            <p class="text-stone leading-relaxed">
              ArusPay is a unified payment orchestration and gateway platform that enables businesses to accept, manage, and optimize digital payments across multiple channels and markets.
            </p>
          </div>
          <button class="group flex items-center gap-2 bg-forest hover:bg-forest-2 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/30">
            Explore Documentation
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <!-- Right: Payment Method Grid -->
        <div class="grid grid-cols-5 gap-3">
          <div
            v-for="(method, i) in paymentMethods"
            :key="method.label"
            v-reveal="{ animation: 'zoom-in', delay: i * 50 }"
            class="group flex flex-col items-center gap-2 p-4 rounded-xl border border-line hover:border-moss/30 hover:shadow-lg hover:shadow-moss/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <div class="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <component :is="'div'" v-html="method.iconSvg" class="w-full h-full"></component>
            </div>
            <span class="text-forest/80 text-[10px] font-medium text-center leading-tight">{{ method.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const paymentMethods = [
  {
    label: 'Online Payments',
    iconSvg: `<svg fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>`,
  },
  {
    label: 'QR Payments',
    iconSvg: `<svg fill="none" stroke="#3A5F3E" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
    </svg>`,
  },
  {
    label: 'FPX & DuitNow',
    iconSvg: `<svg viewBox="0 0 40 24" fill="none">
      <rect width="40" height="24" rx="4" fill="#DDA24F" opacity="0.15"/>
      <text x="20" y="16" font-size="9" font-weight="800" fill="#C78D3E" text-anchor="middle" font-family="Arial">FPX</text>
    </svg>`,
  },
  {
    label: 'Card Processing',
    iconSvg: `<svg fill="none" stroke="#15231B" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
    </svg>`,
  },
  {
    label: 'E-Wallets',
    iconSvg: `<svg fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
    </svg>`,
  },
  {
    label: 'Subscription Billing',
    iconSvg: `<svg fill="none" stroke="#3A5F3E" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
    </svg>`,
  },
  {
    label: 'Merchant Settlement',
    iconSvg: `<svg fill="none" stroke="#DDA24F" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`,
  },
  {
    label: 'Cross-Border Transactions',
    iconSvg: `<svg fill="none" stroke="#15231B" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
  },
  {
    label: 'API Integrations',
    iconSvg: `<svg fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>`,
  },
  {
    label: 'Fraud & Risk Monitoring',
    iconSvg: `<svg fill="none" stroke="#3A5F3E" viewBox="0 0 24 24" stroke-width="1.6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
  },
]
</script>
