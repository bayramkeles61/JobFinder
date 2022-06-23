import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import ViteFonts from "vite-plugin-fonts";
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    VueI18n(
      {
        runtimeOnly: true,
        compositionOnly: true,
      }
    ),
    WindiCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/store',
      ],
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
    ViteFonts({
      google: {
        families: ["Inter", "Open Sans", "Lato", "Manrope", "Roboto"],
      },
    }),
  ],
  test: {
    include: ['tests/**/*.test.ts'],
    environment: "jsdom",
    deps: {
      inline: ['@vue', '@vueuse'],
    },
  }
})
