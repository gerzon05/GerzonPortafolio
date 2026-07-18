<script setup lang="ts">
const { work, labels } = usePortfolioContent()
</script>

<template>
  <div class="h-full w-full">
    <section
      class="bento-card h-full bg-linear-to-br from-app-surface to-[#101010] p-5 md:p-8 flex flex-col gap-5 overflow-hidden">
      <header>
        <p class="text-app-text text-xs md:text-sm uppercase tracking-[0.2em]">{{ labels.experience.eyebrow }}</p>
        <h1 class="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{{ labels.experience.title }}</h1>
      </header>

      <div class="grid gap-4 md:gap-6 flex-1 min-h-0 overflow-y-auto">
        <article v-for="item in work" :key="`${item.company}-${item.title}`"
          class="rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5 flex flex-col justify-between">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h2 class="text-xl font-semibold">{{ item.title }}</h2>
            <p class="text-app-text text-xs md:text-sm">{{ item.startDate }} - {{ item.endDate }}</p>
          </div>

          <div class="mt-2 text-app-text text-sm">
            <p class="text-white font-medium">{{ item.company }}</p>
            <p>{{ item.location }}</p>
          </div>

          <ul class="mt-4 space-y-2">
            <li v-for="description in item.description" :key="description" class="text-app-text text-sm line-clamp-2">
              • {{ description }}
            </li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>
