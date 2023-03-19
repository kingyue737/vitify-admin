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
    <v-card class="text-center mb-0" width="300">
      <v-card-text>
        <strong class="mb-3 d-inline-block">{{ t('themeColor') }}</strong>
        <v-color-picker
          v-model="color"
          show-swatches
          :swatches="colors"
        ></v-color-picker>
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

        <v-divider class="my-3" />

        <strong class="mb-3 d-inline-block">{{ t('image') }}</strong>
        <v-card :disabled="!drawerImageShow" flat>
          <v-item-group
            v-model="drawerImage"
            class="d-flex justify-space-between mb-3"
            mandatory
          >
            <v-item v-for="img in images" :key="img" :value="img" class="mx-1">
              <template #default="{ active, toggle }">
                <v-sheet
                  :class="active && 'v-settings__item--active'"
                  class="d-inline-block v-settings__item"
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
  .v-card__text {
    strong {
      height: 30px;
      line-height: 25px;
      font-weight: 600;
      text-align: center;
    }
  }
  .v-item-group > * {
    cursor: pointer;
  }
  &__item {
    border-width: 3px;
    border-style: solid;
    border-color: transparent !important;
    border-radius: 10px;
    &--active {
      border-color: var(--v-primary-lighten1) !important;
    }
    .v-image {
      border-radius: 7px !important;
    }
  }
}
</style>
