import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  jsxFactory: 'panda',
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          current: { value: 'currentColor' },
          black: { value: '#000' },
          white: { value: '#fff' },
          gray: {
            100: { value: '#cccccc' },
            950: { value: '#2b2b2b' },
          },
          green: {
            100: { value: '#7ED321' },
            500: { value: '#4caf50' },
          },
          blue: {
            100: { value: '#4A90E2' },
            500: { value: '#7ED321' },
          },
        },
      },
    },
  },
  outdir: 'styled-system',
})
