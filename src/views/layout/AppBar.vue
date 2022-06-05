<script lang="ts">
import { mapWritableState } from 'pinia'
import ButtonFullScreen from './ButtonFullScreen.vue'
import AppBreadcrumbs from './AppBreadcrumbs.vue'

export default defineComponent({
  components: {
    ButtonFullScreen,
    AppBreadcrumbs,
  },
  computed: {
    ...mapWritableState(useAppStore, ['drawer']),
    userName() {
      return useUserStore().name
    },
  },
  methods: {
    async logOut() {
      await useUserStore().logOut()
      this.$router.push('/login')
    },
    resetPassword() {
      this.$router.push({ name: 'selfResetPassword' })
    },
  },
})
</script>

<template>
  <v-app-bar app color="transparent" elevate-on-scroll height="60px">
    <v-btn elevation="1" fab small style="z-index: 1" @click="drawer = !drawer">
      <v-icon>
        {{ drawer ? '$mdi-backburger' : '$mdi-menu-open' }}
      </v-icon>
    </v-btn>
    <AppBreadcrumbs />
    <v-spacer />
    <slot name="heading" />
    <ButtonFullScreen />
    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template #activator="{ attrs, on: menu }">
        <v-tooltip bottom>
          <template #activator="{ on: toolTip }">
            <v-btn
              min-width="0"
              text
              v-bind="attrs"
              v-on="{ ...toolTip, ...menu }"
            >
              <v-icon>$mdi-account</v-icon>
            </v-btn>
          </template>
          <span>{{ userName }}</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item @click="resetPassword">
          <v-list-item-icon class="mr-2">
            <v-icon> $mdi-key-variant </v-icon>
          </v-list-item-icon>
          <v-list-item-title link> 重置密码 </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logOut">
          <v-list-item-icon class="mr-2">
            <v-icon> $mdi-logout </v-icon>
          </v-list-item-icon>
          <v-list-item-title link> 注销 </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.v-app-bar {
  backdrop-filter: blur(10px);
  .v-toolbar__content {
    .v-btn.v-size--default:not(.v-btn--icon):not(.v-btn--fab),
    .v-btn.v-size--large:not(.v-btn--icon):not(.v-btn--fab) {
      padding: 10px 15px !important;
    }
  }
  .v-btn:not(.v-btn--text):not(.v-btn--outlined):focus:before {
    opacity: 0;
  }
}
</style>
