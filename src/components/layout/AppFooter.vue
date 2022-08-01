<script setup lang="ts">
import ButtonSettings from './ButtonSettings.vue'
import AppMessage from './AppMessage.vue'
import { useNow } from '@vueuse/core'

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
  ::v-deep > .v-btn,
  ::v-deep > .d-contents > .v-btn {
    height: 100% !important;
    min-width: 0 !important;
    width: 30px;
    .v-icon svg {
      height: 18px;
    }
  }
}
</style>
