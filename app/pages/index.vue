<script setup lang="ts">
// جلب بيانات الصفحة الرئيسية
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

// جلب المقالات
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  ogImage: 'https://6a5246ff6f6c51bd39014cef.imgix.net/sandbox/%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A7%D9%A1%D9%A1_%D9%A0%D9%A2%D9%A3%D9%A9%D9%A4%D9%A9.png'
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page :posts="posts" />
    <!-- تم حذف LandingTestimonials -->
    <LandingFAQ :page />
  </UPage>
</template>
