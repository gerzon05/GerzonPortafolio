<script setup lang="ts">
const { locale, setLocale } = usePortfolioLocale()
const { labels } = usePortfolioContent()
</script>

<template>
  <header class="w-full flex items-center justify-between gap-4 mb-6">
    <NuxtLink to="/"
      class="w-12.5 h-12.5 rounded-full border border-app-border flex items-center justify-center bg-app-surface shrink-0 hover:bg-[#2a2a2a] transition-colors">
      <div class="grid grid-cols-3 gap-0.5">
        <span v-for="i in 9" :key="i" class="w-1.5 h-1.5 rounded-full bg-app-primary"></span>
      </div>
    </NuxtLink>

    <nav
      class="nav-pill flex-1 h-12.5 px-3 md:px-6 flex justify-between items-center text-[9px] md:text-[11px] font-bold tracking-widest uppercase gap-2">
      <NuxtLink to="/about" class="hover:text-app-primary transition-colors"
        :class="$route.path === '/about' ? 'text-app-primary' : 'text-white'">
        {{ labels.nav.about }}
      </NuxtLink>
      <NuxtLink to="/skills" class="hover:text-app-primary transition-colors"
        :class="$route.path === '/skills' ? 'text-app-primary' : 'text-white'">
        {{ labels.nav.skills }}
      </NuxtLink>
      <NuxtLink to="/proyect" class="hover:text-app-primary transition-colors"
        :class="$route.path === '/proyect' ? 'text-app-primary' : 'text-white'">
        {{ labels.nav.projects }}
      </NuxtLink>
      <NuxtLink to="/experience" class="hover:text-app-primary transition-colors"
        :class="$route.path === '/experience' ? 'text-app-primary' : 'text-white'">
        {{ labels.nav.experience }}
      </NuxtLink>
      <NuxtLink to="/contact" class="hover:text-app-primary transition-colors"
        :class="$route.path === '/contact' ? 'text-app-primary' : 'text-white'">
        {{ labels.nav.contact }}
      </NuxtLink>
    </nav>

    <div class="rounded-full border border-app-border bg-app-surface p-1 flex items-center gap-1 shrink-0">
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
  </header>
</template>
