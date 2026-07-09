<template>
  <div class="flex flex-col gap-8 w-full">
    <p class="font-bold text-base leading-6 text-stone tracking-[0.15px] uppercase">
      {{ heading }}
    </p>
    <div class="border-t border-b border-moss py-[22px]">
      <ul class="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-stone text-lg font-serif list-none">
        <li v-for="school in schools" :key="school">
          {{ school }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  schools: {
    type: Array,
    required: true,
  },
})
</script>
