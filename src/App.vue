<script setup lang="ts">
import { THEME_KEY, INIT_OPTIONS_KEY, UPDATE_OPTIONS_KEY } from 'vue-echarts'
import { useVuetify } from './composables/useVuetify'
const vuetify = useVuetify()
const { locale } = useI18n()
provide(
  THEME_KEY,
  computed(() => (vuetify?.theme.dark ? 'dark' : undefined)),
)
provide(
  INIT_OPTIONS_KEY,
  computed(() => ({ locale: locale.value.toUpperCase() })),
)
provide(UPDATE_OPTIONS_KEY, { notMerge: false })
</script>

<template>
  <v-app>
    <PortalTarget name="app" class="d-contents" />
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>
