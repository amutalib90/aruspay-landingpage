<template>
  <section class="bg-cream py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Mission -->
        <div
          v-reveal="'fade-left'"
          class="group flex gap-6 p-8 rounded-2xl border border-line hover:border-moss/30 hover:shadow-lg hover:shadow-moss/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex-shrink-0 w-14 h-14 bg-leaf-light rounded-xl flex items-center justify-center group-hover:bg-leaf transition-colors group-hover:scale-110 duration-300">
            <svg class="w-7 h-7 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 class="font-display text-moss font-medium text-lg mb-2">Our Mission</h3>
            <p class="text-stone text-sm leading-relaxed">
              To simplify and accelerate digital payments across Southeast Asia through secure, scalable, and intelligent financial infrastructure.
            </p>
          </div>
        </div>

        <!-- Vision -->
        <div
          v-reveal="{ animation: 'fade-right', delay: 120 }"
          class="group flex gap-6 p-8 rounded-2xl border border-line hover:border-moss/30 hover:shadow-lg hover:shadow-moss/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex-shrink-0 w-14 h-14 bg-leaf-light rounded-xl flex items-center justify-center group-hover:bg-leaf transition-colors group-hover:scale-110 duration-300">
            <svg class="w-7 h-7 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h3 class="font-display text-moss font-medium text-lg mb-2">Our Vision</h3>
            <p class="text-stone text-sm leading-relaxed">
              To become Southeast Asia's most trusted payment infrastructure platform, enabling businesses of all sizes to participate in a connected digital economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
