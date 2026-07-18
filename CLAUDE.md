 AGENTS.md
# Directrices del Proyecto - Portafolio

Este archivo define las reglas arquitectónicas y convenciones para los agentes de IA en este proyecto de Nuxt 4 y Tailwind 4.

## Tecnologías Principales
- **Framework:** [Nuxt 4](https://nuxt.com/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Gestor de Paquetes:** `pnpm`
- **Herramientas de Código:** `oxlint` para linting y `oxfmt` para formateo.

## Convenciones de Código y Estilo
- **Composition API:** Utiliza `<script setup lang="ts">` en los archivos Vue como base.
- **Directorios Nuxt 4:** El código fuente se encuentra en el directorio `app/`. (A diferencia de Nuxt 3 donde estaba todo en la raíz, Nuxt 4 promueve aislar la app).
- **Componentes:** Ubicarlos en `app/components/`. Son auto-importados por Nuxt. 
- **Páginas y Enrutamiento:** Utilizar `app/pages/` para el enrutamiento basado en archivos.
- **Imágenes:** Se usa el módulo `@nuxt/image`. Usa el componente `<NuxtImg>` para un manejo optimizado de las imágenes locales en `app/assets/img/`.
- **CSS:** Tailwind v4 está integrado usando `@tailwindcss/vite`. Evita CSS custom a menos que sea estrictamente necesario. Las variables de diseño y CSS base están centralizados en `app/assets/css/main.css`.

## Comandos Frecuentes
- **Desarrollo:** `pnpm dev`
- **Construcción:** `pnpm build`
- **Revisar Linters:** `pnpm lint` (Aplica auto-fix con `oxlint`)
- **Formateo:** `pnpm fmt`

## Reglas Relevantes
- Evita incluir dependencias extra de linters (como ESLint o Prettier), el proyecto usa el ecosistema de Oxide (`oxlint`).
- Apóyate de los auto-imports de Nuxt; rara vez necesitas importar `ref`, `computed` o componentes locales manualmente.