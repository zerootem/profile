// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // تحديد إعدادات التطبيق الأساسية
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl', // اتجاه الصفحة من اليمين إلى اليسار
        lang: 'ar'  // تحديد اللغة العربية
      }
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
