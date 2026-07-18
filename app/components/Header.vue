<script setup lang="ts">
const { locale, setLocale } = usePortfolioLocale()
const { labels } = usePortfolioContent()
const route = useRoute()

const isMenuOpen = ref(false)

const navItems = computed(() => [
  { to: '/about', label: labels.value.nav.about },
  { to: '/skills', label: labels.value.nav.skills },
  { to: '/proyect', label: labels.value.nav.projects },
  { to: '/experience', label: labels.value.nav.experience },
  { to: '/contact', label: labels.value.nav.contact },
])

watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="w-full mb-6">
    <div class="flex items-center justify-between gap-3">
      <NuxtLink to="/"
        class="h-12.5 px-3.5 rounded-full border border-app-border flex items-center justify-center bg-app-surface shrink-0 hover:bg-[#2a2a2a] transition-colors">
        <img src="~/assets/img/logo.svg" alt="Gerzon Rangel" class="h-7 md:h-8 w-auto" />
      </NuxtLink>

      <nav
        class="nav-pill hidden md:flex flex-1 h-12.5 px-6 justify-between items-center text-[11px] font-bold tracking-widest uppercase gap-2">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="hover:text-app-primary transition-colors"
          :class="route.path === item.to ? 'text-app-primary' : 'text-white'">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden md:flex rounded-full border border-app-border bg-app-surface p-1 items-center gap-1 shrink-0">
        <button
          class="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors"
          :class="locale === 'es' ? 'bg-app-primary text-white' : 'text-app-text hover:text-white'" @click="setLocale('es')">
          ES
        </button>
        <button
          class="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors"
          :class="locale === 'en' ? 'bg-app-primary text-white' : 'text-app-text hover:text-white'" @click="setLocale('en')">
          EN
        </button>
      </div>

      <button type="button"
        class="md:hidden w-12.5 h-12.5 rounded-full border border-app-border bg-app-surface flex items-center justify-center shrink-0"
        :aria-expanded="isMenuOpen" aria-label="Abrir menú" @click="isMenuOpen = !isMenuOpen">
        <span class="relative w-5 h-4 flex flex-col justify-between">
          <span class="h-0.5 w-full bg-white rounded-full transition-transform" :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''" />
          <span class="h-0.5 w-full bg-white rounded-full transition-opacity" :class="isMenuOpen ? 'opacity-0' : ''" />
          <span class="h-0.5 w-full bg-white rounded-full transition-transform" :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''" />
        </span>
      </button>
    </div>

    <nav v-if="isMenuOpen"
      class="md:hidden mt-3 rounded-2xl border border-app-border bg-app-surface p-2 flex flex-col gap-1">
      <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to"
        class="px-4 py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-colors"
        :class="route.path === item.to ? 'text-app-primary bg-app-bg/60' : 'text-white hover:bg-app-bg/40'">
        {{ item.label }}
      </NuxtLink>

      <div class="mt-1 pt-2 border-t border-app-border flex items-center justify-center gap-1">
        <button
          class="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors"
          :class="locale === 'es' ? 'bg-app-primary text-white' : 'text-app-text hover:text-white'" @click="setLocale('es')">
          ES
        </button>
        <button
          class="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors"
          :class="locale === 'en' ? 'bg-app-primary text-white' : 'text-app-text hover:text-white'" @click="setLocale('en')">
          EN
        </button>
      </div>
    </nav>
  </header>
</template>
