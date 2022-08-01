<script setup lang="ts">
import screenfull from 'screenfull'

const { t } = useI18n()
const isFullscreen = ref(false)
if (screenfull.isEnabled) {
  screenfull.on('change', change)
}
onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', change)
  }
})
function change() {
  if (screenfull.isEnabled) {
    isFullscreen.value = screenfull.isFullscreen
  }
}
function click() {
  if (!screenfull.isEnabled) {
    Message.error('Your browser does not support FullScreen')
    return false
  }
  screenfull.toggle()
}
</script>

<template>
  <v-tooltip bottom>
    <template #activator="{ on }">
      <v-btn id="fullScreen" text min-width="0" v-on="on" @click="click">
        <v-icon>
          {{ isFullscreen ? '$mdi-fullscreen-exit' : '$mdi-fullscreen' }}
        </v-icon>
      </v-btn>
    </template>
    <span>{{ t('fullscreen') }}</span>
  </v-tooltip>
</template>
