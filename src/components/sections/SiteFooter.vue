<template>
  <SectionContainer
    tag="footer"
    background="cream"
    padding="footer"
    inner-class="flex flex-col gap-5"
  >
    <div class="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-10 p-2.5">
      <div class="flex flex-col gap-[30px] max-w-md">
        <div class="flex flex-col gap-3">
          <AppLogo />
          <p class="font-bold text-sm leading-5 text-stone tracking-[0.1px]">
            {{ footer.tagline }}
          </p>
        </div>

        <ul class="flex flex-col gap-3 list-none text-sm leading-5 text-stone">
          <li v-for="brand in footer.brands" :key="brand.name" class="flex flex-wrap gap-3 items-start">
            <span class="flex items-center justify-between w-[100px] shrink-0">
              <span class="font-medium tracking-[0.25px]">{{ brand.name }}</span>
              <span class="tracking-[0.1px]">:</span>
            </span>
            <a
              :href="brand.href"
              class="italic underline tracking-[0.1px] hover:text-forest transition-colors"
            >
              {{ brand.url }}
            </a>
          </li>
        </ul>
      </div>

      <nav aria-label="Footer" class="flex flex-col sm:flex-row gap-5 sm:gap-5">
        <div
          v-for="column in footer.columns"
          :key="column.title"
          class="flex flex-col gap-3 w-full sm:w-[180px]"
        >
          <h2 class="font-bold text-sm leading-5 text-forest tracking-[0.1px]">
            {{ column.title }}
          </h2>
          <ul class="flex flex-col gap-3 list-none">
            <li v-for="link in column.links" :key="link">
              <a href="#" class="text-sm leading-5 text-stone tracking-[0.1px] hover:text-forest transition-colors">
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <hr class="border-0 border-t border-line w-full" />

    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-2.5 text-sm leading-5 text-stone tracking-[0.1px]">
      <p>{{ footer.copyright }}</p>
      <p class="sm:text-right">
        <a
          v-for="(item, index) in footer.legal"
          :key="item"
          href="#"
          class="hover:text-forest transition-colors"
        >
          <span v-if="index > 0"> · </span>{{ item }}
        </a>
      </p>
    </div>
  </SectionContainer>
</template>

<script setup>
import SectionContainer from '../ui/SectionContainer.vue'
import AppLogo from '../ui/AppLogo.vue'
import { footer } from '../../data/landing.js'
</script>
