<script setup lang="ts">
import { groupBy } from 'lodash'
import { useVuetify } from '@/composables/useVuetify'
import AppDrawerItem from './AppDrawerItem.vue'
import { routes } from '@/plugins/router'
import { isPermitted } from '@/utils/permission'

const appStore = useAppStore()
const {
  drawer: drawerStored,
  drawerImage,
  drawerImageShow,
} = storeToRefs(appStore)
const vuetify = useVuetify()
const drawer = computed({
  get() {
    return drawerStored.value || !vuetify.breakpoint.mobile
  },
  set(val: boolean) {
    drawerStored.value = val
  },
})
const mini = computed(() => !drawerStored.value && !vuetify.breakpoint.mobile)
const gradient = computed(() =>
  vuetify.theme.dark
    ? 'to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)'
    : 'to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .7)'
)

const groupedRoutes = computed(() =>
  Object.values(
    groupBy(
      routes.map((c) => c.children![0]),
      'meta.drawerGroup'
    )
  )
    .map((rs) =>
      rs
        .filter(
          (r) => r.meta?.icon && (!r.meta?.roles || isPermitted(r.meta.roles))
        )
        .sort(
          (a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98)
        )
    )
    .reverse()
)
nextTick(() => {
  drawerStored.value =
    vuetify.breakpoint.lgAndUp && vuetify.breakpoint.width !== 1280
})
</script>

<template>
  <v-navigation-drawer
    id="app-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="mini"
    :src="drawerImageShow ? drawerImage : ''"
    :mini-variant="mini"
    app
  >
    <template #img="props">
      <v-img v-show="drawerImageShow" :gradient="gradient" v-bind="props" />
    </template>
    <template #prepend>
      <v-list nav>
        <v-list-item class="pa-1">
          <v-list-item-icon class="mr-5 my-auto">
            <v-icon x-large class="logo-icon" color="primary">$vitify</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="title-content pa-0">
            <v-list-item-title>
              Vitify <span class="primary--text">Admin</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
    </template>

    <v-list expand dense nav>
      <template v-for="(routesInGroup, i) in groupedRoutes">
        <v-divider
          v-if="routesInGroup.length && i !== 0"
          :key="`item-divider-${i}`"
          class="my-2"
        />
        <AppDrawerItem
          v-for="(route, j) in routesInGroup"
          :key="`item-${i}-${j}`"
          :data-cy="`drawer-${route.meta ? route.meta.dataCy : ''}`"
          :item="route"
        />
      </template>
    </v-list>
    <v-spacer />
    <template #append>
      <v-list-item
        id="drawer-footer"
        class="px-0 d-flex flex-column justify-center"
      >
        <div />
        <div class="text-body-2 font-weight-light pt-6 pt-md-0 text-center">
          &copy; Copyright 2022
          <a
            href="https://github.com/kingyue737"
            class="font-weight-regular"
            target="_blank"
            >Yue JIN</a
          >
          <span> & </span>
          <a
            href="https://www.nustarnuclear.com/"
            class="font-weight-regular"
            target="_blank"
            >NuStar</a
          >
        </div>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss">
#app-navigation-drawer {
  &.v-navigation-drawer--open-on-hover:not(.v-navigation-drawer--mini-variant) {
    box-shadow: 0px 0px 6px 2px rgba(100, 100, 100, 0.6);
  }
  .v-navigation-drawer__content {
    overflow-y: hidden;
    &:hover {
      overflow-y: overlay;
    }
  }
  .v-list-group__header.v-list-item--active:before {
    opacity: 0.24;
  }
  &.v-navigation-drawer--mini-variant {
    .sub-bar-item {
      padding-left: 0px !important;
    }
    .logo-icon {
      height: 32px !important;
      width: 32px !important;
    }
  }
  .title-content {
    .v-list-item__title {
      line-height: 1.3;
      font-size: 24px;
      font-weight: bold;
    }
  }
  #drawer-footer {
    min-height: 30px;
    div {
      white-space: nowrap;
    }
    &::after {
      min-height: 0;
    }
  }
}
</style>
