<script setup lang="ts">
import AppBar from '@/components/layout/AppBar.vue'
import AppDrawer from '@/components/layout/AppDrawer.vue'
import AppView from '@/components/layout/AppView.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useTitle } from '@vueuse/core'

const route = useRoute()!
const { t } = useI18n()
const title = computed(() => {
  const title = t(route.meta?.title || route.matched[0].meta?.title || '')
  return title ? `${title} | Vitify Admin` : 'Vitify Admin'
})
useTitle(title)
</script>

<template>
  <div style="display: contents">
    <AppBar />
    <AppDrawer />
    <AppView />
    <AppFooter />
  </div>
</template>
