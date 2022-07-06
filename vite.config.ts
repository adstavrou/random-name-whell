import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {vueI18n} from "@intlify/vite-plugin-vue-i18n";
import path from 'path';

const pathSrc = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vueI18n({
        defaultSFCLang: 'json5',
        include: `${pathSrc}/assets/i18n/**`,
      })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${pathSrc}/assets/styles/_shared';`
      }
    },
    devSourcemap: true
  }
})
