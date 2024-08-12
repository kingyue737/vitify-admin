<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useVuetify } from '@/composables/useVuetify'
import { useDark, useToggle } from '@vueuse/core'
import drawer1 from '@/assets/images/drawer/1.jpg'
import drawer2 from '@/assets/images/drawer/2.jpg'
import drawer3 from '@/assets/images/drawer/3.jpg'

const appStore = useAppStore()
const { t } = useI18n()
const { drawerImage, drawerImageShow } = storeToRefs(appStore)
if (drawerImage.value) {
  drawerImage.value = drawer1
}
const vuetify = useVuetify()
const color = computed({
  get() {
    return vuetify!.theme.themes.light.primary as string
  },
  set(val: string) {
    localStorage.setItem('theme-primary', val)
    vuetify!.theme.themes.light.primary = val
    vuetify!.theme.themes.dark.primary = val
  },
})
const colors = [
  ['#0096C7', '#ff9800'],
  ['#4CAF50', '#FF5252'],
  ['#9C27b0', '#E91E63'],
  ['#304156', '#3f51b5'],
  ['#002FA7', '#492d22'],
]
const images = [drawer1, drawer2, drawer3]
const menuShow = ref(false)
const isDark = useDark({
  onChanged(dark: boolean) {
    vuetify.theme.dark = dark
  },
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <v-menu
    v-model="menuShow"
    :close-on-content-click="false"
    content-class="v-settings"
    top
    left
    origin="right"
    nudge-left="5"
    nudge-top="5"
    offset-y
    transition="slide-x-reverse-transition"
  >
    <template #activator="{ attrs, on: menu }">
      <v-tooltip top>
        <template #activator="{ on: toolTip }">
          <v-btn text tile small v-bind="attrs" v-on="{ ...toolTip, ...menu }">
            <v-icon>mdi-palette-outline</v-icon>
          </v-btn>
        </template>
        <span>{{ t('interfaceSettings') }}</span>
      </v-tooltip>
    </template>
    <v-card class="text-center mb-0" width="320">
      <v-card-text>
        <strong class="mb-3 d-inline-block">{{ t('themeColor') }}</strong>
        <v-color-picker v-model="color" show-swatches :swatches="colors" />
        <v-divider class="my-3" />
        <v-row align="center" no-gutters>
          <v-col cols="auto">{{ t('darkMode') }}</v-col>
          <v-spacer />
          <v-col cols="auto">
            <v-switch
              :input-value="isDark"
              class="ma-0 pa-0"
              color="primary"
              hide-details
              @change="toggleDark"
            />
          </v-col>
        </v-row>
        <v-divider class="my-3" />
        <v-row align="center" no-gutters>
          <v-col cols="auto">{{ t('drawerBackground') }}</v-col>
          <v-spacer />
          <v-col cols="auto">
            <v-switch
              v-model="drawerImageShow"
              class="ma-0 pa-0"
              color="primary"
              hide-details
            />
          </v-col>
        </v-row>
        <v-card :disabled="!drawerImageShow" flat>
          <v-item-group
            v-model="drawerImage"
            class="d-flex justify-space-between my-3 mx-2"
            mandatory
          >
            <v-item v-for="img in images" :key="img" :value="img">
              <template #default="{ active, toggle }">
                <v-sheet
                  class="d-inline-block v-settings__item"
                  :class="active && 'v-settings__item--active'"
                  @click="toggle"
                >
                  <v-img :src="img" height="100" width="50" />
                </v-sheet>
              </template>
            </v-item>
          </v-item-group>
        </v-card>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<style lang="scss" scoped>
.v-settings {
  border-radius: 10px;
  .theme--dark.v-sheet {
    background-color: #272727;
  }
  &__item {
    cursor: pointer;
    border-width: 3px;
    border-style: solid;
    border-color: transparent;
    border-radius: 10px;
    &--active {
      border-color: var(--v-primary-base) !important;
    }
    &:hover {
      border-color: var(--v-primary-lighten2);
    }
    .v-image {
      border-radius: 7px !important;
    }
  }
}
</style>
