<script setup lang="ts">
import AppBar from './AppBar.vue'
import AppDrawer from './AppDrawer.vue'
import AppView from './AppView.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div style="display: contents">
    <AppBar>
      <template #heading>
        <router-view name="bar" />
      </template>
    </AppBar>
    <AppDrawer />
    <AppView />
    <AppFooter />
  </div>
</template>
