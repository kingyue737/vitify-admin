<script lang="ts">
import { useVModel } from '@vueuse/core'
export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 5000,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const isActive = useVModel(props, undefined, emit)
    const timeout = toRef(props, 'timeout')
    let activeTimeout: number
    const startTimeout = () => {
      clearTimeout(activeTimeout)

      if (!isActive.value || timeout.value === -1) {
        return
      }

      activeTimeout = setTimeout(() => {
        isActive.value = false
      }, timeout.value)
    }
    watch([isActive, timeout], startTimeout)
    if (isActive.value) {
      startTimeout()
    }
  },
})
</script>

<template>
  <v-alert v-bind="$attrs" class="message-item" v-on="$listeners">
    <slot />
    <template #close>
      <v-btn icon small class="v-alert__dismissible" @click="$emit('close')">
        <v-icon>$cancel</v-icon>
      </v-btn>
    </template>
  </v-alert>
</template>

<style scoped lang="scss"></style>
