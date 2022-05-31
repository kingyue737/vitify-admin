<script setup lang="ts">
import supportedBrowsers from './supportedBrowsers'
import { useChartGlobalOption } from '@/composables/useECharts'

useChartGlobalOption()
const isValidBrowser = ref(true)
isValidBrowser.value = supportedBrowsers.test(navigator.userAgent)
</script>

<template>
  <v-app>
    <v-snackbar top :value="!isValidBrowser" color="warning" :timeout="10000">
      检测到您的浏览器不被此应用支持，建议使用最新版Chrome或基于Chromium内核的浏览器（如Windows
      10/11内置的新版Edge）。
      <template #action="{ attrs }">
        <v-btn
          icon
          small
          v-bind="attrs"
          class="ml-4"
          @click="isValidBrowser = true"
        >
          <v-icon>$cancel</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>
