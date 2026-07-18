<script setup lang="ts">
const { locale } = usePortfolioLocale()
const { basics, skills, education, languages, services, labels } = usePortfolioContent()

const skillGroups = computed(() =>
  locale.value === 'en'
    ? [
      { title: 'Frontend', items: skills.value.frontend },
      { title: 'Backend', items: skills.value.backend },
      { title: 'Database', items: skills.value.database },
      { title: 'Tools', items: skills.value.tools },
    ]
    : [
      { title: 'Frontend', items: skills.value.frontend },
      { title: 'Backend', items: skills.value.backend },
      { title: 'Base de datos', items: skills.value.database },
      { title: 'Herramientas', items: skills.value.tools },
    ],
)
</script>

<template>
  <div class="h-full w-full">
    <section class="bento-card h-full bg-linear-to-br from-app-surface to-[#101010] p-5 md:p-8 flex flex-col gap-5 overflow-hidden">
      <header>
        <p class="text-app-text text-xs md:text-sm uppercase tracking-[0.2em]">{{ basics.label }}</p>
        <h1 class="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{{ labels.skills.title }}</h1>
      </header>

      <div class="grid md:grid-cols-12 gap-4 md:gap-5 flex-1 min-h-0 overflow-y-auto pr-1">
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="md:col-span-6 rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5"
        >
          <p class="text-[11px] text-app-text uppercase tracking-widest mb-3">{{ group.title }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in group.items" :key="`${group.title}-${item}`" class="badge">
              {{ item }}
            </span>
          </div>
        </article>

        <article class="md:col-span-6 rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5">
          <p class="text-[11px] text-app-text uppercase tracking-widest mb-3">{{ labels.skills.languages }}</p>
          <div class="space-y-2">
            <div
              v-for="language in languages"
              :key="language.language"
              class="flex items-center justify-between rounded-xl border border-app-border bg-app-bg/50 px-3 py-2"
            >
              <span class="text-white text-sm">{{ language.language }}</span>
              <span class="text-app-text text-xs">{{ language.fluency }}</span>
            </div>
          </div>
        </article>

        <article class="md:col-span-6 rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5">
          <p class="text-[11px] text-app-text uppercase tracking-widest mb-3">{{ labels.skills.services }}</p>
          <ul class="space-y-2">
            <li
              v-for="service in services"
              :key="service"
              class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-2 text-app-text text-sm"
            >
              {{ service }}
            </li>
          </ul>
        </article>

        <article class="md:col-span-12 rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5">
          <p class="text-[11px] text-app-text uppercase tracking-widest mb-3">
            {{ locale === 'en' ? 'Education' : 'Educación' }}
          </p>
          <div class="grid md:grid-cols-2 gap-3">
            <div
              v-for="item in education"
              :key="`${item.institution}-${item.area}`"
              class="rounded-xl border border-app-border bg-app-bg/50 px-3 py-3"
            >
              <p class="text-sm text-white font-medium">{{ item.institution }}</p>
              <p class="text-app-text text-sm mt-1">{{ item.area }}</p>
              <p class="text-app-text text-xs mt-1">{{ item.studyType }}</p>
              <p v-if="item.status" class="text-app-text text-xs mt-1">{{ item.status }}</p>
              <p v-if="item.description" class="text-app-text text-xs mt-1">{{ item.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
