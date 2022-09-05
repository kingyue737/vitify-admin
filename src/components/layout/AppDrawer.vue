<script lang="ts">
import { groupBy } from 'lodash'
import { useVuetify } from '@/composables/useVuetify'
import AppDrawerItem from './AppDrawerItem.vue'
import { routes } from '@/plugins/router'
import { isPermitted } from '@/utils/permission'
import type { RouteConfig } from 'vue-router'
export default defineComponent({
  components: { AppDrawerItem },
  setup() {
    const appStore = useAppStore()
    const vuetify = useVuetify()
    const drawer = computed({
      get() {
        return appStore.drawer || !vuetify.breakpoint.mobile
      },
      set(val: boolean) {
        appStore.drawer = val
      },
    })
    const mini = computed(() => !appStore.drawer && !vuetify.breakpoint.mobile)
    return { drawer, routes, mini }
  },
  computed: {
    ...mapState(useAppStore, {
      drawerImage: 'drawerImage',
      drawerImageShow: 'drawerImageShow',
    }),
    groupedRoutes(): RouteConfig[][] {
      const routes = groupBy(
        this.routes.map((c) => c.children![0]),
        'meta.drawerGroup'
      )
      return Object.values(routes)
        .map((rs) =>
          rs
            .filter(
              (r) =>
                r.meta?.icon && (!r.meta?.roles || isPermitted(r.meta.roles))
            )
            .sort(
              (a, b) =>
                (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98)
            )
        )
        .reverse()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.drawer =
        this.$vuetify.breakpoint.lgAndUp &&
        this.$vuetify.breakpoint.width !== 1280
    })
  },
})
</script>

<template>
  <v-navigation-drawer
    id="app-navigation-drawer"
    v-model="drawer"
    dark
    :expand-on-hover="mini"
    :src="drawerImageShow ? drawerImage : ''"
    :mini-variant="mini"
    app
    width="260"
    mini-variant-width="72"
  >
    <template #img="props">
      <v-img
        v-show="drawerImageShow"
        gradient="to bottom, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
        v-bind="props"
      />
    </template>
    <template #prepend>
      <v-list dense nav>
        <v-list-item class="pa-1">
          <v-list-item-avatar :rounded="'0'" class="align-self-center" contain>
            <v-img src="/favicon.svg" />
          </v-list-item-avatar>

          <v-list-item-content class="title-content pa-0">
            <v-list-item-title>
              Vitify <span class="primary--text">Admin</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
    </template>

    <v-list expand nav>
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
  background-color: var(--v-primary-darken2);
  transition-property: transform, visibility, width, box-shadow;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  .v-list-item--active:hover::before,
  .v-list-item--active::before {
    opacity: 0;
  }
  .v-list--nav {
    padding-left: 12px;
    padding-right: 12px;
  }
  .v-list-item__icon {
    margin: 12px 0;
  }
  .v-list--nav .v-list-item:not(:last-child):not(:only-child),
  .v-list--rounded .v-list-item:not(:last-child):not(:only-child) {
    margin-bottom: 0px;
  }
  .v-navigation-drawer__content {
    .v-list-item__icon.v-list-group__header__append-icon {
      .v-icon {
        font-size: 19px;
      }
    }
  }
  div.v-list-item__icon--text,
  div.v-list-item__icon:first-child {
    margin-left: 3px !important;
    margin-right: 18px;
    opacity: 0.8;
  }
  .v-divider {
    background-color: rgba(181, 181, 181, 0.2);
    border-color: rgba(181, 181, 181, 0.1);
    width: calc(100% - 24px);
    margin-left: 12px;
  }
  &.v-navigation-drawer--open-on-hover:not(.v-navigation-drawer--mini-variant) {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.6);
  }
  .v-navigation-drawer__content {
    overflow-y: overlay;
  }
  .v-list-group__header.v-list-item--active:before {
    opacity: 0.24;
  }
  .v-list-item {
    &__icon--text,
    &__icon:first-child {
      justify-content: center;
      text-align: center;
      width: 20px;
      margin-right: 24px;
      margin-left: 12px !important;
    }
  }
  .v-list-group--sub-group {
    .v-list-item {
      padding-left: 8px;
    }
    .v-list-group__header {
      padding-right: 0;
      .v-list-item__icon--text {
        margin-top: 19px;
        order: 0;
      }
      .v-list-group__header__prepend-icon {
        order: 2;
        margin-right: 8px;
      }
    }
  }
  &.v-navigation-drawer--mini-variant {
    .v-list-item {
      justify-content: flex-start !important;
    }
    .sub-bar-item {
      padding-left: 0px !important;
    }
  }
  .title-content {
    margin-left: -6px;
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
