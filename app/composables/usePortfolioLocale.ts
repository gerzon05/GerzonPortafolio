type Locale = 'es' | 'en'

const LOCALE_STORAGE_KEY = 'portfolio-locale'

const isLocale = (value: string): value is Locale => value === 'es' || value === 'en'

export const usePortfolioLocale = () => {
  const locale = useState<Locale>('portfolio-locale', () => 'es')

  if (import.meta.client) {
    onMounted(() => {
      const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)
      if (savedLocale && isLocale(savedLocale)) {
        locale.value = savedLocale
      }
    })

    watch(
      locale,
      (value) => {
        localStorage.setItem(LOCALE_STORAGE_KEY, value)
      },
      { immediate: true },
    )
  }

  const setLocale = (nextLocale: Locale) => {
    locale.value = nextLocale
  }

  return { locale, setLocale }
}
