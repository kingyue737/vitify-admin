import type Vue from 'vue'

export type VForm = typeof Vue & {
  validate: () => boolean
  resetValidation: () => boolean
  reset: () => void
}

export type InstallPlugin = (vue: typeof Vue) => any
