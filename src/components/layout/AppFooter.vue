<script setup lang="ts">
import ButtonSettings from './ButtonSettings.vue'
import AppMessage from './AppMessage.vue'
import { useNow } from '@vueuse/core'

const { t } = useI18n()
const now = useNow()
</script>

<template>
  <v-footer
    id="app-footer"
    app
    dark
    inset
    padless
    height="30"
    color="primary darken-2"
    class="font-weight-light"
  >
    <v-icon small class="ml-3 mr-1"> $mdi-clock-outline </v-icon>
    <span>
      {{ now.toLocaleString() }}
    </span>

    <v-spacer />
    <v-tooltip top>
      <template #activator="{ on }">
        <v-btn
          text
          tile
          small
          width="40"
          href="https://kingyue737.github.io/vitify-docs/"
          target="_blank"
          v-on="on"
        >
          <v-icon>$mdi-book-outline</v-icon>
          <v-icon size="12">$mdi-open-in-new</v-icon>
        </v-btn>
      </template>
      <span>{{ t('documentation') }}</span>
    </v-tooltip>
    <AppMessage />
    <ButtonSettings />
    <div class="ml-2" />
  </v-footer>
</template>

<style lang="scss" scoped>
#app-footer {
  user-select: none;
  span {
    font-size: 14px;
  }
  > :deep(.v-btn),
  > :deep(.d-contents) > .v-btn {
    height: 100% !important;
    min-width: 0 !important;
    width: 30px;
    font-size: 14px;
    font-weight: 300;
    .v-icon svg {
      height: 18px;
    }
  }
}
</style>
