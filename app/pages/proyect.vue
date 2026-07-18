<script setup lang="ts">
const { locale } = usePortfolioLocale()
const { projects, labels } = usePortfolioContent()

useHead({ title: () => labels.value.projects.title })

const totalTech = computed(() =>
  new Set(projects.value.flatMap((project) => project.techs)).size,
)

const text = computed(() =>
  locale.value === 'en'
    ? {
      totalProjects: 'Total projects',
      techUsed: 'Tech used',
      source: 'Source',
      private: 'Private repository',
    }
    : {
      totalProjects: 'Proyectos totales',
      techUsed: 'Tecnologías usadas',
      source: 'Código',
      private: 'Repositorio privado',
    },
)
</script>

<template>
  <div class="h-full w-full">
    <section
      class="bento-card h-full bg-linear-to-br from-app-surface to-[#101010] p-5 md:p-8 flex flex-col gap-5 overflow-hidden">
      <header class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-app-text text-xs md:text-sm uppercase tracking-[0.2em]">{{ labels.projects.eyebrow }}</p>
          <h1 class="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{{ labels.projects.title }}</h1>
        </div>

        <div class="flex items-center gap-2">
          <div class="rounded-xl border border-app-border bg-app-bg/60 px-3 py-2">
            <p class="text-[10px] uppercase tracking-widest text-app-text">{{ text.totalProjects }}</p>
            <p class="text-white text-sm font-semibold mt-1">{{ projects.length }}</p>
          </div>
          <div class="rounded-xl border border-app-border bg-app-bg/60 px-3 py-2">
            <p class="text-[10px] uppercase tracking-widest text-app-text">{{ text.techUsed }}</p>
            <p class="text-white text-sm font-semibold mt-1">{{ totalTech }}</p>
          </div>
        </div>
      </header>

      <div class="flex-1 min-h-0 overflow-y-auto pr-1">
        <div class="grid md:grid-cols-2 gap-4 md:gap-5 auto-rows-min content-start">
          <article v-for="project in projects" :key="project.name"
            class="rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5 transition-colors hover:border-[#3a3a3a]">
            <div>
              <h2 class="text-lg md:text-xl font-semibold">{{ project.name }}</h2>
              <p class="text-app-text text-sm mt-2 leading-relaxed">{{ project.description }}</p>
            </div>

            <div class="mt-3 space-y-3">
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in project.techs" :key="`${project.name}-${tech}`" class="badge">
                  {{ tech }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <NuxtLink v-if="project.url" :to="project.url" target="_blank" class="btn-primary">{{
                  labels.projects.live }}</NuxtLink>
                <NuxtLink v-if="project.github" :to="project.github" target="_blank" class="btn-secondary">{{
                  text.source }}</NuxtLink>
                <span v-else class="text-app-text text-xs">{{ project.type }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
