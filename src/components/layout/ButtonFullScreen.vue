<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
const { t } = useI18n()
</script>

<template>
  <v-tooltip bottom>
    <template #activator="{ on }">
      <v-btn text min-width="0" v-on="on" @click="toggle">
        <v-icon>
          {{ isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
        </v-icon>
      </v-btn>
    </template>
    <span>{{ t('fullscreen') }}</span>
  </v-tooltip>
</template>
