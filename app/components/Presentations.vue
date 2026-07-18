<script setup lang="ts">
type WorkItem = {
  company: string
  title: string
  startDate: string
  endDate: string
  description?: string[]
}

const { basics, projects, work, labels } = usePortfolioContent()
const emailCopied = ref(false)
const copyTextTimeout = 1500
const featuredWork = computed<WorkItem | undefined>(() => work.value[0] as WorkItem | undefined)
const featuredProjects = computed(() => projects.value.slice(0, 2))
const skillTags = computed(() =>
  [...new Set(projects.value.flatMap((project) => project.techs.map((tech) => tech)))].slice(0, 6),
)

const handleCopyEmail = async () => {
  await navigator.clipboard.writeText(basics.value.email)
  emailCopied.value = true
  setTimeout(() => {
    emailCopied.value = false
  }, copyTextTimeout)
}
</script>

<template>
  <section
    class="bento-card h-full w-full relative overflow-hidden bg-linear-to-br from-app-surface to-[#101010] p-5 md:p-8 flex flex-col">
    <div class="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-app-primary/15 blur-3xl" />
    <div class="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

    <div class="relative z-10 flex items-start justify-between gap-4">
      <div>
        <p class="text-app-text text-xs md:text-sm uppercase tracking-[0.2em]">{{ basics.label }}</p>
        <h1 id="about" class="text-2xl md:text-5xl text-white font-bold tracking-tighter mt-2">
          {{ labels.home.heading }} {{ basics.name }}
        </h1>
      </div>

      <div class="hidden sm:flex items-center gap-2 rounded-full border border-app-border bg-app-bg/70 px-3 py-1.5">
        <span class="status-dot" />
        <span class="text-[10px] text-app-text font-bold uppercase tracking-widest">{{ basics.online }}</span>
      </div>
    </div>

    <div class="relative z-10 mt-4 md:mt-5 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6 flex-1 min-h-0">
      <article
        class="rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5 flex flex-col justify-between min-h-0">
        <p class="text-app-text text-sm md:text-base leading-relaxed line-clamp-6 md:line-clamp-7">
          {{ basics.summary }}
        </p>

        <div class="mt-4 flex flex-wrap items-center gap-2">
          <NuxtLink to="/contact" class="btn-primary">
            {{ labels.home.hireMe }}
          </NuxtLink>
          <button @click="handleCopyEmail" class="btn-secondary min-w-28">
            {{ emailCopied ? labels.home.copied : labels.home.copyEmail }}
          </button>
          <a v-if="basics.cv" :href="basics.cv" download class="btn-secondary">
            {{ labels.home.downloadCv }}
          </a>
        </div>
      </article>

      <div class="grid grid-rows-3 gap-3 md:gap-4 min-h-0">
        <article id="skill"
          class="rounded-2xl border border-app-border bg-app-bg/40 p-4 flex flex-col justify-between min-h-0">
          <p class="text-[11px] text-app-text uppercase tracking-widest">{{ labels.home.skills }}</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <span v-for="skill in skillTags" :key="skill" class="badge text-[9px] py-1 px-2.5">
              {{ skill }}
            </span>
          </div>
        </article>

        <article id="proyect"
          class="rounded-2xl border border-app-border bg-app-bg/40 p-4 flex flex-col justify-between min-h-0">
          <p class="text-[11px] text-app-text uppercase tracking-widest">{{ labels.home.projects }}</p>
          <div class="space-y-1.5">
            <p v-for="project in featuredProjects" :key="project.name" class="text-sm text-white line-clamp-1">
              {{ project.name }}
            </p>
          </div>
        </article>

        <article id="experience"
          class="rounded-2xl border border-app-border bg-app-bg/40 p-4 flex items-center justify-between gap-3 min-h-0">
          <div class="min-w-0">
            <p class="text-[11px] text-app-text uppercase tracking-widest">{{ labels.home.experience }}</p>
            <p class="text-white text-sm font-medium mt-1 line-clamp-1">
              {{ featuredWork?.title }} - {{ featuredWork?.company }}
            </p>
            <p class="text-app-text text-xs mt-1 line-clamp-1">{{ featuredWork?.startDate }} - {{ featuredWork?.endDate
            }}</p>
          </div>
          <div
            class="hidden md:block w-16 h-16 rounded-full border border-app-border overflow-hidden bg-app-bg shrink-0 relative">
            <img src="~/assets/img/gerzonfoto.avif" alt="Gerzon Avatar" class="w-full h-full object-cover" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
