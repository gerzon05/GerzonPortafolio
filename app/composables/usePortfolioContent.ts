import curriculum from '~/static/curriculum.json'
import cvPdfUrl from '~/assets/pdf/Curriculum-Gerzon-Rangel.pdf?url'

type Locale = 'es' | 'en'

type CurriculumTranslation = {
  basics?: Partial<typeof curriculum.basics>
  about?: typeof curriculum.about
  work?: typeof curriculum.work
  skills?: typeof curriculum.skills
  education?: typeof curriculum.education
  languages?: typeof curriculum.languages
  projects?: typeof curriculum.projects
  services?: string[]
}

const translations = (curriculum.translations ?? {}) as { en?: CurriculumTranslation }

const uiByLocale = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    home: {
      heading: 'Soy',
      hireMe: 'Contrátame',
      copyEmail: 'Copiar correo',
      copied: 'Copiado',
      downloadCv: 'Descargar CV',
      skills: 'Habilidades',
      projects: 'Proyectos',
      experience: 'Experiencia',
    },
    about: {
      title: 'Sobre mí',
      name: 'Nombre',
      location: 'Ubicación',
      contactProfiles: 'Contacto y Perfiles',
      email: 'Correo',
      contact: 'Contacto',
      cv: 'CV',
      stack: 'Stack principal',
      education: 'Educación',
      languages: 'Idiomas',
      current: 'Actualmente en',
    },
    skills: {
      title: 'Habilidades',
      techStack: 'Stack tecnológico',
      languages: 'Idiomas',
      services: 'Servicios',
    },
    projects: {
      eyebrow: 'Portafolio',
      title: 'Proyectos',
      live: 'Ver demo',
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia',
    },
    contact: {
      eyebrow: 'Conversemos',
      title: 'Contacto',
      sendEmail: 'Enviar correo',
      copyEmail: 'Copiar correo',
      copied: 'Copiado',
      networks: 'Redes',
      open: 'Abrir',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    home: {
      heading: "I'm",
      hireMe: 'Hire me',
      copyEmail: 'Copy email',
      copied: 'Copied',
      downloadCv: 'Download CV',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
    },
    about: {
      title: 'About',
      name: 'Name',
      location: 'Location',
      contactProfiles: 'Contact & Profiles',
      email: 'Email',
      contact: 'Contact',
      cv: 'CV',
      stack: 'Core stack',
      education: 'Education',
      languages: 'Languages',
      current: 'Currently at',
    },
    skills: {
      title: 'Skills',
      techStack: 'Tech stack',
      languages: 'Languages',
      services: 'Services',
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Projects',
      live: 'Live',
    },
    experience: {
      eyebrow: 'Career',
      title: 'Experience',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Contact',
      sendEmail: 'Send email',
      copyEmail: 'Copy email',
      copied: 'Copied',
      networks: 'Networks',
      open: 'Open',
    },
  },
} as const

const pickLocalized = <T>(base: T, key: keyof CurriculumTranslation, locale: Locale) =>
  (locale === 'en' ? (translations.en?.[key] as T | undefined) : undefined) ?? base

export const usePortfolioContent = () => {
  const { locale } = usePortfolioLocale()

  const basics = computed(() =>
    locale.value === 'en' && translations.en?.basics
      ? { ...curriculum.basics, ...translations.en.basics, cv: cvPdfUrl }
      : { ...curriculum.basics, cv: cvPdfUrl },
  )
  const about = computed(() => pickLocalized(curriculum.about, 'about', locale.value))
  const work = computed(() => pickLocalized(curriculum.work, 'work', locale.value))
  const skills = computed(() => pickLocalized(curriculum.skills, 'skills', locale.value))
  const education = computed(() => pickLocalized(curriculum.education, 'education', locale.value))
  const languages = computed(() => pickLocalized(curriculum.languages, 'languages', locale.value))
  const projects = computed(() => pickLocalized(curriculum.projects, 'projects', locale.value))
  const services = computed(() => pickLocalized(curriculum.services, 'services', locale.value))
  const labels = computed(() => uiByLocale[locale.value])

  return {
    basics,
    about,
    profiles: curriculum.profiles,
    contacts: curriculum.contacts,
    work,
    skills,
    education,
    languages,
    projects,
    services,
    labels,
  }
}
