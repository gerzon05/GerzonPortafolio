<script setup lang="ts">
const { about, basics, profiles, labels, skills, education, languages, work } = usePortfolioContent()

const topSkills = computed(() => [...skills.value.frontend, ...skills.value.backend].slice(0, 8))
const currentEducation = computed(() => education.value[0])
const currentWork = computed(() => work.value[0])
</script>

<template>
  <div class="h-full w-full">
    <section
      class="bento-card h-full bg-linear-to-br from-app-surface to-[#101010] p-5 md:p-7 flex flex-col gap-4 overflow-hidden">
      <header class="flex items-start justify-between gap-3">
        <div>
          <p class="text-app-text text-xs md:text-sm uppercase tracking-[0.2em]">{{ basics.label }}</p>
          <h1 class="text-2xl md:text-4xl font-bold tracking-tighter mt-1">{{ labels.about.title }}</h1>
        </div>
        <div class="hidden sm:flex items-center gap-2 rounded-full border border-app-border bg-app-bg/70 px-3 py-1.5">
          <span class="status-dot" />
          <span class="text-[10px] text-app-text font-bold uppercase tracking-widest">{{ basics.online }}</span>
        </div>
      </header>

      <div class="grid md:grid-cols-[1.5fr_1fr] gap-4 flex-1 min-h-0">
        <article class="rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5 flex flex-col min-h-0">
          <p class="text-app-text text-sm md:text-[15px] leading-relaxed line-clamp-12">
            {{ about[0] }}
          </p>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-2">
              <p class="text-[10px] uppercase tracking-widest text-app-text">{{ labels.about.name }}</p>
              <p class="text-sm text-white mt-1 line-clamp-1">{{ basics.name }}</p>
            </div>
            <div class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-2">
              <p class="text-[10px] uppercase tracking-widest text-app-text">{{ labels.about.location }}</p>
              <p class="text-sm text-white mt-1 line-clamp-1">{{ basics.city }}, {{ basics.country }}</p>
            </div>
          </div>

          <div class="mt-4">
            <p class="text-[11px] text-app-text uppercase tracking-widest mb-2">{{ labels.about.stack }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in topSkills" :key="tech" class="badge">{{ tech }}</span>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div v-if="currentWork" class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-2">
              <p class="text-[10px] uppercase tracking-widest text-app-text">{{ labels.about.current }}</p>
              <p class="text-sm text-white mt-1 line-clamp-1">{{ currentWork.title }}</p>
              <p class="text-app-text text-xs mt-1 line-clamp-1">{{ currentWork.company }}</p>
            </div>
            <div v-if="currentEducation" class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-2">
              <p class="text-[10px] uppercase tracking-widest text-app-text">{{ labels.about.education }}</p>
              <p class="text-sm text-white mt-1 line-clamp-1">{{ currentEducation.area }}</p>
              <p class="text-app-text text-xs mt-1 line-clamp-1">{{ currentEducation.institution }}</p>
            </div>
          </div>

          <div class="mt-4">
            <p class="text-[11px] text-app-text uppercase tracking-widest mb-2">{{ labels.about.languages }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="lang in languages" :key="lang.language" class="badge">
                {{ lang.language }} · {{ lang.fluency }}
              </span>
            </div>
          </div>
        </article>

        <article class="rounded-2xl border border-app-border bg-app-bg/40 p-3 flex flex-col min-h-0">
          <div class="relative flex-1 min-h-40 rounded-xl overflow-hidden border border-app-border bg-app-bg/50">
            <img src="~/assets/img/gerzonfoto.avif" :alt="basics.name" class="w-full h-full object-cover object-top" />
            <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-3 pt-8">
              <p class="text-sm font-bold text-white line-clamp-1">{{ basics.name }}</p>
              <p class="text-[11px] text-app-text uppercase tracking-widest line-clamp-1">{{ basics.label }}</p>
            </div>
          </div>

          <div class="mt-3 space-y-2">
            <a :href="`mailto:${basics.email}`"
              class="block rounded-xl border border-app-border bg-app-bg/50 px-3 py-2 hover:border-gray-500 transition-colors">
              <p class="text-[10px] uppercase tracking-widest text-app-text">{{ labels.about.email }}</p>
              <p class="text-sm text-white mt-1 line-clamp-1">{{ basics.email }}</p>
            </a>
          </div>

          <div class="mt-2 grid grid-cols-2 gap-2">
            <NuxtLink v-for="profile in profiles" :key="profile.network" :to="profile.url" target="_blank"
              class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-2 hover:border-gray-500 transition-colors">
              <p class="text-[10px] uppercase tracking-widest text-app-text">{{ profile.network }}</p>
              <p class="text-sm text-white mt-1 line-clamp-1">{{ profile.username }}</p>
            </NuxtLink>
          </div>

          <div class="mt-3 flex items-center gap-2">
            <NuxtLink to="/contact" class="btn-primary">{{ labels.about.contact }}</NuxtLink>
            <a v-if="basics.cv" :href="basics.cv" download class="btn-secondary">
              {{ labels.about.cv }}
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
