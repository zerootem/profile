<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('blog', route.path, {
    fields: ['description']
  })
)

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

if (page.value.image) {
  useSeoMeta({ ogImage: page.value.image })
} else {
  defineOgImage('Portfolio', {
    title,
    description,
    headline: 'Blog'
  })
}

const articleLink = computed(() => `${window?.location}`)

// ✅ تغيير تنسيق التاريخ إلى العربية
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// ✅ دالة نسخ الرابط (دعم RTL)
const copyToClipboard = (text: string, successMessage: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert(successMessage) // يمكن استبدالها بـ toast notification
  })
}
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <!-- ✅ رابط العودة: عكس اتجاه السهم في RTL -->
        <ULink
          to="/blog"
          class="text-sm flex items-center gap-1 rtl:flex-row-reverse"
        >
          <UIcon :name="$dir === 'rtl' ? 'lucide:chevron-right' : 'lucide:chevron-left'" />
          المدونة
        </ULink>

        <div class="flex flex-col gap-3 mt-8">
          <!-- ✅ عرض التاريخ والمدة بالعربية -->
          <div class="flex text-xs text-muted items-center justify-center gap-2">
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead">
              -
            </span>
            <span v-if="page.minRead">
              {{ page.minRead }} دقائق قراءة
            </span>
          </div>

          <NuxtImg
            v-if="page.image"
            :src="page.image"
            :alt="page.title"
            class="rounded-lg w-full h-[300px] object-cover object-center"
          />

          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>

          <div class="flex items-center justify-center gap-2 mt-2">
            <UUser
              orientation="vertical"
              color="neutral"
              variant="outline"
              class="justify-center items-center text-center"
              v-bind="page.author"
            />
          </div>
        </div>

        <UPageBody class="max-w-3xl mx-auto">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />

          <!-- ✅ ترجمة زر نسخ الرابط -->
          <div class="flex items-center justify-end gap-2 text-sm text-muted rtl:justify-start">
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="نسخ الرابط"
              @click="copyToClipboard(articleLink, 'تم نسخ الرابط بنجاح')"
            />
          </div>

          <UContentSurround :surround />
        </UPageBody>
      </UPage>
    </UContainer>
  </UMain>
</template>
