<script setup lang="ts">
import { browsersRegexp } from 'virtual:supported-browsers'
import { useChartGlobalOption } from '@/composables/useECharts'
import { useI18n } from 'vue-i18n-bridge'

const { t } = useI18n()
useChartGlobalOption()
const isValidBrowser = ref(true)
isValidBrowser.value = browsersRegexp.test(navigator.userAgent)
</script>

<template>
  <v-app>
    <v-snackbar top :value="!isValidBrowser" color="warning" :timeout="10000">
      <span> {{ t('warning') }} </span>
      <template #action="{ attrs }">
        <v-btn icon small v-bind="attrs" @click="isValidBrowser = true">
          <v-icon>$cancel</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <PortalTarget name="app" class="d-contents" />
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-app>
</template>

<i18n lang="json">
{
  "zh": {
    "warning": "检测到您的浏览器不被此应用支持，建议使用最新版Chrome或基于Chromium内核的浏览器（如Windows 10/11内置的新版Edge）。"
  },
  "en": {
    "warning": "Your browser is not supported by this app, please use the latest chromium-based browsers."
  }
}
</i18n>
