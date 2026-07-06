<template>
  <section class="bg-leaf-light py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div v-reveal="'fade-up'" class="text-center mb-14">
        <h2 class="font-display text-3xl lg:text-4xl font-medium text-forest">What ArusPay Represents</h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(item, i) in pillars"
          :key="item.title"
          v-reveal="{ animation: 'fade-up', delay: i * 80 }"
          class="group text-center p-6 bg-cream rounded-2xl border border-line hover:border-moss/30 hover:shadow-xl hover:shadow-moss/10 hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white group-hover:bg-leaf-light"
          >
            <component :is="'div'" class="w-7 h-7" v-html="item.iconSvg"></component>
          </div>
          <h3 class="text-forest font-bold text-sm mb-2">{{ item.title }}</h3>
          <p class="text-stone text-xs leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    title: 'Seamless Flow',
    desc: 'Payments should move effortlessly between businesses, customers, and borders.',
    iconSvg: `<svg class="w-7 h-7" fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
  },
  {
    title: 'Regional Connectivity',
    desc: 'Built in ASEAN, for ASEAN — designed around local payment ecosystems and regional commerce needs.',
    iconSvg: `<svg class="w-7 h-7" fill="none" stroke="#3A5F3E" viewBox="0 0 24 24" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
  },
  {
    title: 'Enterprise Reliability',
    desc: 'Bank-grade security, compliance, and scalability for modern businesses.',
    iconSvg: `<svg class="w-7 h-7" fill="none" stroke="#15231B" viewBox="0 0 24 24" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>`,
  },
  {
    title: 'Innovation with Practicality',
    desc: 'Advanced technology without unnecessary complexity.',
    iconSvg: `<svg class="w-7 h-7" fill="none" stroke="#DDA24F" viewBox="0 0 24 24" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>`,
  },
  {
    title: 'Merchant Empowerment',
    desc: 'Helping businesses grow by reducing payment friction and improving transaction efficiency.',
    iconSvg: `<svg class="w-7 h-7" fill="none" stroke="#4C7A50" viewBox="0 0 24 24" stroke-width="1.8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
  },
]
</script>
