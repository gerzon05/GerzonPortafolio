<script setup lang="ts">
const { locale } = usePortfolioLocale()
const { basics, contacts, labels } = usePortfolioContent()

const emailCopied = ref(false)
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formText = computed(() =>
  locale.value === 'en'
    ? {
        formTitle: 'Quick message',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Open email app',
      }
    : {
        formTitle: 'Mensaje rápido',
        name: 'Nombre',
        email: 'Correo',
        subject: 'Asunto',
        message: 'Mensaje',
        submit: 'Abrir correo',
      },
)

const mailtoHref = computed(() => {
  const subject = form.subject.trim() || (locale.value === 'en' ? 'Contact from portfolio' : 'Contacto desde portafolio')
  const body = [
    `${formText.value.name}: ${form.name.trim()}`,
    `${formText.value.email}: ${form.email.trim()}`,
    '',
    form.message.trim(),
  ].join('\n')

  return `mailto:${basics.value.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

const sendMailto = () => {
  window.location.href = mailtoHref.value
}

const copyEmail = async () => {
  await navigator.clipboard.writeText(basics.value.email)
  emailCopied.value = true
  setTimeout(() => {
    emailCopied.value = false
  }, 1500)
}
</script>

<template>
  <div class="h-full w-full">
    <section class="bento-card h-full bg-linear-to-br from-app-surface to-[#101010] p-5 md:p-8 flex flex-col gap-5 overflow-hidden">
      <header>
        <p class="text-app-text text-xs md:text-sm uppercase tracking-[0.2em]">{{ labels.contact.eyebrow }}</p>
        <h1 class="text-3xl md:text-5xl font-bold tracking-tighter mt-2">{{ labels.contact.title }}</h1>
      </header>

      <div class="grid md:grid-cols-[1.35fr_1fr] gap-4 md:gap-6 flex-1 min-h-0">
        <article class="rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5">
          <p class="text-[11px] text-app-text uppercase tracking-widest mb-3">{{ formText.formTitle }}</p>
          <form class="space-y-3" @submit.prevent="sendMailto">
            <input
              v-model="form.name"
              type="text"
              :placeholder="formText.name"
              required
              class="w-full rounded-xl border border-app-border bg-app-bg/50 px-3 py-2.5 text-sm text-white placeholder:text-app-text/70 focus:outline-none focus:border-gray-500"
            />
            <input
              v-model="form.email"
              type="email"
              :placeholder="formText.email"
              required
              class="w-full rounded-xl border border-app-border bg-app-bg/50 px-3 py-2.5 text-sm text-white placeholder:text-app-text/70 focus:outline-none focus:border-gray-500"
            />
            <input
              v-model="form.subject"
              type="text"
              :placeholder="formText.subject"
              class="w-full rounded-xl border border-app-border bg-app-bg/50 px-3 py-2.5 text-sm text-white placeholder:text-app-text/70 focus:outline-none focus:border-gray-500"
            />
            <textarea
              v-model="form.message"
              :placeholder="formText.message"
              required
              rows="5"
              class="w-full rounded-xl border border-app-border bg-app-bg/50 px-3 py-2.5 text-sm text-white placeholder:text-app-text/70 focus:outline-none focus:border-gray-500 resize-none"
            />
            <div class="flex flex-wrap items-center gap-2">
              <button type="submit" class="btn-primary">{{ formText.submit }}</button>
              <button @click="copyEmail" type="button" class="btn-secondary">
                {{ emailCopied ? labels.contact.copied : labels.contact.copyEmail }}
              </button>
            </div>
          </form>
        </article>

        <article class="rounded-2xl border border-app-border bg-app-bg/40 p-4 md:p-5 flex flex-col justify-between">
          <div class="space-y-2">
            <p class="text-white text-lg font-semibold">{{ basics.name }}</p>
            <p class="text-app-text text-sm">{{ basics.city }}, {{ basics.country }}</p>
            <p class="text-app-text text-sm">{{ basics.phone }}</p>
            <p class="text-app-text text-sm line-clamp-1">{{ basics.email }}</p>
          </div>

          <div class="mt-4 flex flex-wrap gap-2 pb-4 border-b border-app-border">
            <NuxtLink :to="`mailto:${basics.email}`" class="btn-primary">
              {{ labels.contact.sendEmail }}
            </NuxtLink>
          </div>

          <div class="pt-4">
            <p class="text-[11px] text-app-text uppercase tracking-widest mb-3">{{ labels.contact.networks }}</p>
            <div class="space-y-2">
              <NuxtLink
                v-for="contact in contacts"
                :key="contact.name"
                :to="contact.url"
                target="_blank"
                class="flex items-center justify-between rounded-xl border border-app-border bg-app-bg/50 px-3 py-2 hover:border-gray-500 transition-colors"
              >
                <span class="text-white text-sm">{{ contact.name }}</span>
                <span class="text-app-text text-xs">{{ labels.contact.open }}</span>
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
