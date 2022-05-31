<script setup lang="ts">
import ButtonSettings from './ButtonSettings.vue'
import AppMessage from './AppMessage.vue'

const timeNow = ref(new Date())
const timeShown = computed(() => timeNow.value.toLocaleString())
const intervalId = setInterval(() => (timeNow.value = new Date()), 500)
onBeforeUnmount(() => clearInterval(intervalId))
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
    style="z-index: 203"
  >
    <v-icon small class="ml-3 mr-1"> $mdi-clock-outline </v-icon>
    <span>
      {{ timeShown }}
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
