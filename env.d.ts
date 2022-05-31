/// <reference types="vite/client" />
/// <reference types="unplugin-vue2-script-setup/shims" />

interface ImportMetaEnv {
  readonly VITE_AUTH: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
