<template>
  <section class="bg-cream py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Ecosystem -->
        <div>
          <div v-reveal="'fade-up'">
            <h2 class="font-display text-3xl font-medium text-forest mb-3">Our Ecosystem</h2>
            <p class="text-stone mb-10 leading-relaxed">
              A future-ready payment infrastructure ecosystem designed to grow with businesses and power the digital economy across ASEAN.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(product, i) in ecosystem"
              :key="product.name"
              v-reveal="{ animation: 'fade-up', delay: i * 70 }"
              class="group flex items-start gap-3 p-4 bg-white rounded-xl border border-line hover:border-moss/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                :style="{ background: product.color + '20' }"
              >
                <div class="w-4 h-4" v-html="product.iconSvg"></div>
              </div>
              <div>
                <div class="text-forest font-bold text-sm">{{ product.name }}</div>
                <div class="text-stone text-xs mt-0.5">{{ product.sub }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Part of a Stronger Group -->
        <div>
          <div v-reveal="{ animation: 'fade-up', delay: 100 }">
            <h2 class="font-display text-3xl font-medium text-forest mb-3">Part of a Stronger Group</h2>
            <p class="text-stone mb-10 leading-relaxed">
              ArusPay operates under SMRT Holdings — a group committed to building Malaysia's digital financial future.
            </p>
          </div>

          <div class="space-y-3">
            <div
              v-for="(block, i) in groupBlocks"
              :key="block.title"
              v-reveal="{ animation: 'fade-right', delay: i * 120 }"
              class="flex items-center gap-4 rounded-xl px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              :class="block.class"
            >
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="block.iconClass">
                <component :is="'div'" v-if="block.iconSvg" v-html="block.iconSvg" class="w-5 h-5"></component>
                <span v-else class="font-black text-sm" :class="block.iconTextClass">{{ block.iconText }}</span>
              </div>
              <div>
                <div class="font-bold flex items-center gap-1" :class="block.titleClass" v-html="block.title"></div>
                <div v-if="block.sub" class="text-xs mt-0.5" :class="block.subClass">{{ block.sub }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const ecosystem = [
  {
    name: 'ArusShield',
    sub: 'Fraud & Risk Engine',
    color: '#3A5F3E',
    iconSvg: `<svg fill="none" stroke="#3A5F3E" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  },
  {
    name: 'ArusFlow',
    sub: 'Settlement & Reconciliation',
    color: '#4C7A50',
    iconSvg: `<svg fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  },
  {
    name: 'ArusConnect',
    sub: 'Merchant APIs',
    color: '#15231B',
    iconSvg: `<svg fill="none" stroke="#15231B" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  },
  {
    name: 'ArusCore',
    sub: 'Payment Switching Engine',
    color: '#DDA24F',
    iconSvg: `<svg fill="none" stroke="#C78D3E" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
  {
    name: 'ArusInsight',
    sub: 'Analytics & BI',
    color: '#3A5F3E',
    iconSvg: `<svg fill="none" stroke="#3A5F3E" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  },
  {
    name: 'ArusCross',
    sub: 'Cross-border Payments',
    color: '#4C7A50',
    iconSvg: `<svg fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  },
]

const groupBlocks = [
  {
    title: 'SMRT Holdings',
    class: 'bg-forest',
    iconClass: 'bg-white/10',
    titleClass: 'text-white',
    iconSvg: `<svg fill="none" stroke="white" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  },
  {
    title: 'Arus<span class="text-leaf">Pay</span> Payments',
    class: 'bg-moss',
    iconClass: 'bg-white/20',
    titleClass: 'text-white',
    iconText: 'A',
    iconTextClass: 'text-white',
  },
  {
    title: 'Arus<span class="text-moss">Pay</span>',
    sub: 'Payment Infrastructure Platform',
    class: 'bg-white border-2 border-leaf-light shadow-sm',
    iconClass: 'bg-leaf-light',
    titleClass: 'text-forest',
    subClass: 'text-stone',
    iconText: 'P',
    iconTextClass: 'text-moss',
  },
]
</script>
