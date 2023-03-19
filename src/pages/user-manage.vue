<script setup lang="ts">
import RouterWrapper from '@/components/layout/RouterWrapper.vue'
</script>

<template>
  <RouterWrapper />
</template>

<route lang="json">
{
  "meta": {
    "title": "userManagement",
    "icon": "mdi-account-group",
    "roles": ["admin"],
    "drawerGroup": "admin",
    "dataCy": "userManage"
  }
}
</route>
