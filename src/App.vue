<script setup lang="ts">
import { useChartGlobalOption } from '@/composables/useECharts'

useChartGlobalOption()
</script>

<template>
  <v-app>
    <PortalTarget name="app" class="d-contents" />
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>
