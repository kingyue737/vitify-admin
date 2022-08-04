<script setup lang="ts">
import { useVuetify } from '@/composables/useVuetify'

const { locale, t } = useI18n()
const vuetify = useVuetify()
const setLang = (lang: string) => {
  locale.value = lang
  vuetify.lang.current = lang
}
</script>

<template>
  <v-menu bottom left offset-y origin="top right" transition="scale-transition">
    <template #activator="{ attrs, on: menu }">
      <v-tooltip bottom>
        <template #activator="{ on: toolTip }">
          <v-btn
            min-width="0"
            text
            v-bind="attrs"
            v-on="{ ...toolTip, ...menu }"
          >
            <v-icon>$mdi-translate</v-icon>
          </v-btn>
        </template>
        <span>{{ t('language') }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
        :class="{ 'v-list-item--active': locale === 'zh' }"
        @click="setLang('zh')"
      >
        <v-list-item-icon class="mr-2">
          <v-icon> $mdi-ideogram-cjk-variant </v-icon>
        </v-list-item-icon>
        <v-list-item-title link> 简体中文 </v-list-item-title>
      </v-list-item>
      <v-list-item
        :class="{ 'v-list-item--active': locale === 'en' }"
        @click="setLang('en')"
      >
        <v-list-item-icon class="mr-2">
          <v-icon> $mdi-alphabetical-variant </v-icon>
        </v-list-item-icon>
        <v-list-item-title link> English </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
