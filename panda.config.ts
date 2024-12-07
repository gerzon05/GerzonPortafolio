import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  jsxFactory: 'styled',
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          current: { value: 'currentColor' },
          black: { value: '#000' },
          white: { value: '#fff' },
          gray: {
            100: { value: '#999999' },
            950: { value: '#2b2b2b' },
          },
          green: {
            100: { value: '#a3e635' },
            500: { value: '#4caf50' },
          },
        }
      }
    },
  },
  outdir: "styled-system",
});
