<script setup lang="ts">
type Event = {
  title: string
  date: string
  location: string
  url?: string
  category: 'Conference' | 'Live talk' | 'Podcast'
}

const { data: page } = await useAsyncData('speaking', () => {
  return queryCollection('speaking').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Portfolio', { title, description })

const { global } = useAppConfig()

// ✅ ترجمة أسماء الفئات
const categoryLabels: Record<Event['category'], string> = {
  'Conference': 'مؤتمر',
  'Live talk': 'محادثة مباشرة',
  'Podcast': 'بودكاست'
}

const groupedEvents = computed(() => {
  const events = page.value?.events || []
  const grouped: Record<Event['category'], Event[]> = {
    'Conference': [],
    'Live talk': [],
    'Podcast': []
  }
  for (const event of events) {
    if (grouped[event.category]) grouped[event.category].push(event)
  }
  return grouped
})

// ✅ تنسيق التاريخ بالعربية
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long'
  })
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: 'mx-0! text-start',      // ✅ من text-left إلى text-start
        description: 'mx-0! text-start', // ✅ من text-left إلى text-start
        links: 'justify-start'
      }"
    >
      <template #links>
        <UButton
          v-if="page.links"
          :to="`mailto:${global.email}`"
          v-bind="page.links[0]"
        />
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <div
        v-for="(eventsInCategory, category) in groupedEvents"
        :key="category"
        class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mb-16 last:mb-0"
      >
        <div class="lg:col-span-1 mb-4 lg:mb-0">
          <h2
            class="lg:sticky lg:top-16 text-xl font-semibold tracking-tight text-highlighted"
          >
            {{ categoryLabels[category as Event['category']] }}
          </h2>
        </div>

        <div class="lg:col-span-2 space-y-8">
          <div
            v-for="(event, index) in eventsInCategory"
            :key="`${category}-${index}`"
            class="group relative pr-6 border-r border-default rtl:pl-6 rtl:border-l rtl:border-r-0"
          >
            <NuxtLink
              v-if="event.url"
              :to="event.url"
              class="absolute inset-0"
            />
            <div class="mb-1 text-sm font-medium text-muted">
              <span>{{ event.location }}</span>
              <span
                v-if="event.location && event.date"
                class="mx-1"
              >·</span>
              <span v-if="event.date">{{ formatDate(event.date) }}</span>
            </div>

            <h3 class="text-lg font-semibold text-highlighted">
              {{ event.title }}
            </h3>

            <UButton
              v-if="event.url"
              target="_blank"
              :label="event.category === 'Podcast' ? 'استمع' : 'شاهد'"
              variant="link"
              class="p-0 pt-2 gap-0 rtl:flex-row-reverse"
            >
              <template #trailing>
                <UIcon
                  :name="$dir === 'rtl' ? 'i-lucide-arrow-left' : 'i-lucide-arrow-right'"
                  class="size-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100 rtl:group-hover:-translate-x-1"
                />
              </template>
            </UButton>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
