<script setup lang="ts">
import ogImage from '~/assets/img/gerzonfoto.avif?url'

const { locale } = usePortfolioLocale()
const { basics } = usePortfolioContent()

const title = computed(() => `${basics.value.name} — ${basics.value.label}`)
const description = computed(() => basics.value.summary)
const ogImageUrl = computed(() => `${basics.value.url}${ogImage}`)

useHead({
  htmlAttrs: { lang: locale },
  titleTemplate: (chunk) => chunk ? `${chunk} · ${basics.value.name}` : title.value,
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: basics.value.url,
  ogImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImageUrl,
})
</script>

<template>
  <div class="min-h-screen bg-app-bg text-app-text p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center">
    <div class="max-w-275 w-full flex flex-col h-full md:h-[calc(100vh-4rem)]">
      <Header />

      <main class="flex-1 min-h-0 w-full overflow-hidden mt-6">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
