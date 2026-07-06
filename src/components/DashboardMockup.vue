<template>
  <div class="relative w-full max-w-lg">
    <!-- Main dashboard card -->
    <div class="relative bg-[#0d1640]/90 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-sm">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="flex items-center gap-1 mb-1">
            <span class="text-white font-bold text-sm">Arus</span><span class="text-[#7CB577] font-bold text-sm">Pay</span>
          </div>
          <div class="text-white/40 text-xs">Dashboard · Overview</div>
        </div>
        <div class="w-8 h-8 bg-blue-600/30 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-white/5 rounded-xl p-3">
          <div class="text-white/50 text-xs mb-1">Total Volume</div>
          <div class="text-white font-bold text-lg">RM 24.58M</div>
          <div class="flex items-center gap-1 mt-1">
            <svg class="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-emerald-400 text-xs font-medium">11.8%</span>
            <span class="text-white/30 text-xs">vs last month</span>
          </div>
        </div>
        <div class="bg-white/5 rounded-xl p-3">
          <div class="text-white/50 text-xs mb-1">Transactions</div>
          <div class="text-white font-bold text-lg">1,280,450</div>
          <div class="flex items-center gap-1 mt-1">
            <svg class="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="text-emerald-400 text-xs font-medium">11.6%</span>
            <span class="text-white/30 text-xs">vs last month</span>
          </div>
        </div>
      </div>

      <!-- Volume Trend Chart -->
      <div class="bg-white/5 rounded-xl p-3 mb-3">
        <div class="text-white/50 text-xs mb-3">Volume Trend</div>
        <div class="flex items-end gap-1.5 h-16">
          <div v-for="(bar, i) in chartBars" :key="i"
            class="flex-1 rounded-t transition-all duration-300"
            :class="bar.active ? 'bg-blue-500' : 'bg-white/15'"
            :style="{ height: bar.height + '%' }">
          </div>
        </div>
        <div class="flex justify-between mt-2">
          <span class="text-white/30 text-[10px]">Jan</span>
          <span class="text-white/30 text-[10px]">Mar</span>
          <span class="text-white/30 text-[10px]">May</span>
          <span class="text-white/30 text-[10px]">Jun</span>
        </div>
      </div>

      <!-- Payment Methods Donut -->
      <div class="bg-white/5 rounded-xl p-3">
        <div class="text-white/50 text-xs mb-3">Top Payment Methods</div>
        <div class="flex items-center gap-3">
          <div class="relative w-14 h-14 flex-shrink-0">
            <svg viewBox="0 0 36 36" class="w-14 h-14 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#ffffff10" stroke-width="3.5" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#3b82f6" stroke-width="3.5" stroke-dasharray="40 60" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#6366f1" stroke-width="3.5" stroke-dasharray="25 75" stroke-dashoffset="-40" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22d3ee" stroke-width="3.5" stroke-dasharray="20 80" stroke-dashoffset="-65" />
            </svg>
          </div>
          <div class="space-y-1.5 flex-1">
            <div v-for="method in paymentMethods" :key="method.name" class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <div class="w-2 h-2 rounded-full" :style="{ background: method.color }"></div>
                <span class="text-white/60 text-[10px]">{{ method.name }}</span>
              </div>
              <span class="text-white text-[10px] font-semibold">{{ method.pct }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating mobile card -->
    <div class="absolute -bottom-8 -left-10 bg-[#111b4a] border border-white/15 rounded-2xl p-4 w-48 shadow-2xl">
      <div class="flex items-center justify-between mb-3">
        <div class="text-white/40 text-[10px]">Send Payment</div>
        <div class="w-5 h-5 bg-blue-600/40 rounded-full flex items-center justify-center">
          <svg class="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
      </div>
      <div class="text-white font-bold text-xl mb-3">RM 350.00</div>
      <div class="space-y-1.5">
        <div v-for="method in mobilePayMethods" :key="method" class="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5">
          <div class="w-4 h-4 rounded-sm" :style="{ background: getMethodColor(method) }"></div>
          <span class="text-white/70 text-[10px]">{{ method }}</span>
        </div>
      </div>
      <button class="w-full mt-3 bg-blue-600 text-white text-[10px] font-semibold py-2 rounded-lg">
        Pay Now
      </button>
    </div>

    <!-- Glow effect -->
    <div class="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl -z-10"></div>
  </div>
</template>

<script setup>
const chartBars = [
  { height: 45, active: false }, { height: 60, active: false }, { height: 40, active: false },
  { height: 75, active: false }, { height: 55, active: false }, { height: 85, active: true },
  { height: 70, active: false }, { height: 90, active: false }, { height: 65, active: false },
  { height: 100, active: false }, { height: 80, active: false }, { height: 95, active: true },
]

const paymentMethods = [
  { name: 'Cards', color: '#3b82f6', pct: 40 },
  { name: 'FPX', color: '#6366f1', pct: 25 },
  { name: 'E-Wallets', color: '#22d3ee', pct: 20 },
  { name: 'Others', color: '#ffffff30', pct: 15 },
]

const mobilePayMethods = ['FPX', 'GrabPay', 'TNG', 'Maybank QR']

const methodColors = {
  FPX: '#f59e0b', GrabPay: '#22c55e', TNG: '#3b82f6', 'Maybank QR': '#f97316',
}
const getMethodColor = (m) => methodColors[m] || '#6366f1'
</script>
