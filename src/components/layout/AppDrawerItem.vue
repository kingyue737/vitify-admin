<script lang="ts">
import type { RouteConfig } from 'vue-router'
import type { PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'AppDrawerItem',
  props: {
    level: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object as PropType<RouteConfig>,
      required: true,
    },
  },
  setup() {
    return { t: useI18n().t }
  },
  computed: {
    isItem() {
      return !this.item.children || this.visibleChildrenNum <= 1
    },
    isItemInChild() {
      return this.isItem && this.visibleChildrenNum === 1
    },
    indexItem() {
      if (this.item.children) {
        return this.item.children[0]
      } else {
        return this.item
      }
    },
    icon() {
      return this.item.meta?.icon || ''
    },
    title() {
      return this.t(this.item.meta?.title || '')
    },
    subtitle() {
      return this.item.meta?.subtitle || ''
    },
    visibleChildren() {
      return this.item.children
        ?.filter((child) => child.meta?.icon)
        .sort(
          (a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98)
        )
    },
    visibleChildrenNum() {
      return this.visibleChildren?.length || 0
    },
    group() {
      return (
        this.item.path ||
        this.item.name ||
        this.item.children?.find((v) => !v.path)?.name
      )
    },
  },
})
</script>

<template>
  <div
    v-if="!item.meta || item.meta.icon"
    :class="`${level ? 'sub-' : ''}bar-item`"
  >
    <v-list-item
      v-if="isItem"
      :to="{ name: item.name || visibleChildren?.[0].name }"
      active-class="primary white--text"
    >
      <v-list-item-icon>
        <v-icon>{{ icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-group v-else :prepend-icon="icon" :group="group">
      <template #activator>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </template>
      <AppDrawerItem
        v-for="child in visibleChildren"
        :key="child.name"
        :item="child"
        :level="level + 1"
      />
    </v-list-group>
  </div>
</template>

<style lang="scss" scoped>
.sub-bar-item {
  padding-left: 12px;
  transition: padding 0.2s;
}
</style>
