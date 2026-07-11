<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :description="page.about.description"
    :ui="{
      container: 'p-0!',
      title: 'text-start text-xl sm:text-xl lg:text-2xl font-medium',      // ✅ text-left → text-start
      description: 'text-start mt-3 text-sm sm:text-md lg:text-sm text-muted' // ✅ text-left → text-start
    }"
  />
</template>

<style scoped>
/* يمكن إضافة تنسيقات إضافية هنا إن لزم الأمر */
</style>
