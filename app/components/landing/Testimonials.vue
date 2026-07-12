<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'px-0 pt-0!'
    }"
  >
    <!-- ✅ تأكد من وجود شهادات قبل عرض الكاروسيل -->
    <div v-if="page.testimonials && page.testimonials.length > 0">
      <UCarousel
        v-slot="{ item }"
        :items="page.testimonials"
        :autoplay="{ delay: 4000 }"
        loop
        dots
        :ui="{
          viewport: '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)'
        }"
      >
        <UPageCTA
          :description="item.quote"
          variant="naked"
          class="rounded-none"
          :ui="{
            container: 'sm:py-12 lg:py-12 sm:gap-8',
            description: 'text-base! text-balance text-start before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 rtl:before:-mr-6 lg:before:-ml-10 rtl:lg:before:-mr-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 rtl:after:mr-1 lg:after:ml-2 rtl:lg:after:mr-2'
          }"
        >
          <UUser
            v-bind="item.author"
            size="xl"
            class="justify-center"
          />
        </UPageCTA>
      </UCarousel>
    </div>
    <div v-else>
      <p class="text-center text-muted">لا توجد شهادات حالياً</p>
    </div>
  </UPageSection>
</template>
