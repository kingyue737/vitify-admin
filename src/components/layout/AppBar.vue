<script setup lang="ts">
import AppBreadcrumbs from './AppBreadcrumbs.vue'
import ButtonFullScreen from './ButtonFullScreen.vue'
import ButtonLocale from './ButtonLocale.vue'
import ButtonUser from './ButtonUser.vue'

const { drawer } = storeToRefs(useAppStore())
</script>

<template>
  <v-app-bar app color="transparent" elevate-on-scroll height="60px">
    <v-btn elevation="1" fab small style="z-index: 1" @click="drawer = !drawer">
      <v-icon>
        {{ drawer ? 'mdi-backburger' : 'mdi-menu-open' }}
      </v-icon>
    </v-btn>
    <AppBreadcrumbs />
    <v-spacer />
    <v-btn
      text
      min-width="0"
      href="https://github.com/kingyue737/vitify-admin"
      target="_blank"
    >
      <v-icon>mdi-github</v-icon>
    </v-btn>
    <PortalTarget name="app-bar" class="d-contents" />
    <ButtonFullScreen />
    <ButtonLocale />
    <ButtonUser />
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar {
  backdrop-filter: blur(10px);
  .v-btn:not(.v-btn--text):not(.v-btn--outlined):focus:before {
    opacity: 0;
  }
}
@supports not (backdrop-filter: blur(10px)) {
  .theme--light .v-app-bar {
    background-color: rgba(242, 245, 248, 0.8) !important;
  }
  .theme--dark .v-app-bar {
    background-color: rgba(18, 18, 18, 0.8) !important;
  }
}
</style>
