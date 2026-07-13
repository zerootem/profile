// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // تحديد إعدادات التطبيق الأساسية
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
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
    // تم إزالة 'nuxt-sitemap'
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

  // تم إزالة إعدادات sitemap
})
