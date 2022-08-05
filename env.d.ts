/// <reference types="vite/client" />
/// <reference types="unplugin-vue2-script-setup/shims" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
