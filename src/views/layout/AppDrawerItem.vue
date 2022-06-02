<script lang="ts">
import type { RouteConfig } from 'vue-router'
import type { PropType } from '@vue/composition-api'

export default defineComponent({
  name: 'AppDrawerItem',
  props: {
    basePath: { type: String, default: '' },
    level: {
      type: Number,
      default: 0,
    },
    item: {
      type: Object as PropType<RouteConfig>,
      required: true,
    },
    text: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isItem(): boolean {
      return !this.item.children || this.visibleChildrenNum <= 1
    },
    isItemInChild(): boolean {
      return this.isItem && this.visibleChildrenNum === 1
    },
    indexItem(): RouteConfig {
      if (this.item.children) {
        return this.item.children[0]
      } else {
        return this.item
      }
    },
    icon(): string {
      return this.item.meta?.icon || ''
    },
    title(): string {
      return this.$tc(this.item.meta?.title || '')
    },
    subtitle(): string | undefined {
      return this.item.meta?.subtitle
    },
    visibleChildren(): RouteConfig[] | undefined {
      return this.item.children?.filter((child) => !child.meta?.hidden)
    },
    visibleChildrenNum(): number {
      return this.visibleChildren?.length || 0
    },
    abbr(): string {
      if (!this.item.meta?.title) return ''
      let text = ''
      this.item.meta.title.split(' ').forEach((val: string) => {
        text += val.substring(0, 1)
      })
      return text
    },
  },
  methods: {
    resolvePath(routePath: string): string {
      const paths = [this.basePath]
      if (this.isItemInChild) {
        paths.push(this.item.path)
      }
      paths.push(routePath)
      return paths.join('/').replace(/^.*\/(\/.*$)/, '$1')
    },
  },
})
</script>

<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="`${level ? 'sub-' : ''}bar-item`"
  >
    <v-list-item
      v-if="isItem"
      :to="resolvePath(indexItem.path)"
      active-class="primary white--text"
    >
      <v-list-item-icon v-if="text" class="v-list-item__icon--text">
        {{ abbr }}
      </v-list-item-icon>
      <v-list-item-icon v-else-if="icon">
        <v-icon>{{ icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content v-if="title || subtitle">
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-group
      v-else
      :prepend-icon="item.meta ? item.meta.icon : ''"
      :group="item.path"
    >
      <template #activator>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </template>
      <AppDrawerItem
        v-for="child in visibleChildren"
        :key="child.name"
        :item="child"
        :base-path="resolvePath(item.path)"
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
