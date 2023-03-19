import { defineConfig } from 'vite'
// The more plugins, the slower the startup of `vite preview`
// this file is for instant preview with an empty config
export default defineConfig({
  preview: {},
})
