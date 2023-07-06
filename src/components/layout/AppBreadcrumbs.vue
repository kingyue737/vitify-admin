<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const items = computed(() => {
  return route!.matched
    .slice(1)
    .filter(
      (item) =>
        item.meta && item.meta.title && !(item.meta?.breadcrumb === 'hidden'),
    )
    .map((route) => ({
      text: t(route.meta.title!),
      disabled: route.meta?.breadcrumb === 'disabled' || false,
      to: route.path,
    }))
})
</script>

<template>
  <v-breadcrumbs class="ml-n6 d-none d-sm-block">
    <v-slide-x-reverse-transition class="v-breadcrumbs" leave-absolute group>
      <v-breadcrumbs-item
        v-for="item in items"
        :key="item.text.toString()"
        :to="item.to"
        exact
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-slide-x-reverse-transition>
  </v-breadcrumbs>
</template>
