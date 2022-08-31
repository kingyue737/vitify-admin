<p align="center">
  <img alt="Vitify - Opinionated Vuetify Admin Starter Template" src="public/favicon.svg" width=200px/>
</p>
<h1 align="center">Vitify Admin</h1>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.7.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuetifyjs/vuetify">
    <img src="https://img.shields.io/badge/vuetify-2.6.9-blue.svg" alt="vuetify">
  </a>
  <a href="https://github.com/kingyue737/vitify-admin/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
</p>

<p align='center'>
<b>Vite</b> + <b>Vuetify</b>, Opinionated Admin Starter Template<br><br>
</p>

<p align='center'>
<a href="https://vitify-admin.netlify.app/">Live Demo<br><br></a>
<a href="https://kingyue737.github.io/vitify-docs/">Documentation<br><br></a>
</p>


## Features
- 🦾 Full [TypeScript Support and intellisense](https://github.com/vuetifyjs/vuetify/issues/14798#issuecomment-1139788615) for [Vuetify 2](https://vuetifyjs.com/) components, powered by [Volar](https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-vue-language-features)

- 🖖 [Vue 2.7](https://github.com/vuejs/vue) - Composition API and `<script setup>`

- ⚡️ [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂️ [File based routing](./src/pages)

- 📑 [Layout system](./src/layouts)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🌍 [I18n ready](./locales)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- ☁️ Deploy on [Netlify](https://www.netlify.com/), zero-config

- 🧪 Unit/Component Testing with [Vitest](https://github.com/vitest-dev/vitest) + [Testing Library](https://github.com/testing-library/vue-testing-library), E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

<br>

### Admin Starter Template

- 🪟 Layout with drawer, header, footer(status bar) and login page

- 🧭 Auto generated navigation drawer and breadcrumbs based on routes

- 🤡 Mock API in dev and testing with [Mock Service Worker](https://github.com/mswjs/msw)

- 🔔 Notification store

- 🧑‍💼 Route authority based on user role

- 📉 Data visualization with [vue-echarts](https://github.com/ecomfe/vue-echarts)

- 🔗 Communicate with backend with REST API powered by [axios](https://github.com/axios/axios)

- 🎨 Theme color customization and dark mode

- 📱 Responsive layout

## Pre-packed

### UI Frameworks

- [Vuetify 2](https://vuetifyjs.com/) - Material Design Framework

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - File system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - Layouts for pages
- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the Composition API
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Auto import Vuetify 2 components
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [PortalVue](https://github.com/linusborg/portal-vue) - Use [`<Teleport>`](https://vuejs.org/guide/built-ins/teleport.html) of Vue 3 in Vue 2
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`vue-i18n-bridge`](https://github.com/intlify/vue-i18n-next/tree/master/packages/vue-i18n-bridge#readme) - Backport Composition API and message format syntax to Vue 2
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Prebundle Vue I18n messages and support SFC i18n custom block
- [VueUse](https://github.com/antfu/vueuse) - Collection of useful composition APIs
- [Mock Service Worker](https://github.com/mswjs/msw) - Seamless REST/GraphQL API mocking library for browser and Node.js
- [`vite-plugin-vue2-svg`](https://github.com/pakholeung37/vite-plugin-vue2-svg) - Load SVG files as Vue components, and auto register as Vuetify `v-icon`s
- [`vite-plugin-browserslist-useragent`](https://github.com/kingyue737/vite-plugin-browserslist-useragent) - Compile browserslist query to a RegExp to test browser useragent

### Compatibility

- [`@vitejs/plugin-legacy`](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) - Generate polyfills with `@babel/preset-env` in production bundle
- [`postcss-preset-env`](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) - Convert modern CSS into what most browsers understand, determining polyfills based on `browserslist`

### Coding Style

- [Prettier](https://prettier.io/), single quotes, no semi
- [ESLint](https://eslint.org/) with adapted [@vue/eslint-config-typescript](https://github.com/vuejs/eslint-config-typescript)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [pnpm](https://pnpm.js.org/) - Fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - TypeScript support inside Vue SFCs
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Find and fix problems in your code
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatter
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)


## Try it now!

> Vitify Admin requires Node >=16.6.0

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kingyue737/vitify-admin/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit kingyue737/vitify-admin my-vitify-app
cd my-vitify-app
pnpm i
```
> Vitify Admin requires [`pnpm patch`](https://pnpm.io/cli/patch) for bug fixing in dependencies before maintainers release them. If you are using `yarn`, you can use [`yarn patch`](https://yarnpkg.com/cli/patch). For `npm` users, [`patch-package`](https://github.com/ds300/patch-package) is required as `npm` has no built-in patching functionality.

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`, navigation drawer and login page
- [ ] Change the hostname in `vite.config.ts`
- [ ] Change the favicon in `public`
- [ ] Clean up the `README` and remove routes
- [ ] Change the copyright in navigation drawer and login page
- [ ] Change default locale of `vue-i18n`
- [ ] Change or remove [Cypress Dashboard](https://dashboard.cypress.io/) related ID in [ci.yml](https://github.com/kingyue737/vitify-admin/blob/main/.github/workflows/ci.yml)

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:9527

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Type Check

```
pnpm typecheck
```

### Testing

```
pnpm test:unit
```

For E2E test, you need to build the project first

```
pnpm build
pnpm test:e2e
```

### Record on Cypress Dashboard

Go to [Cypress Dashboard](https://dashboard.cypress.io/), create a new project and add its `projectId` as `${CYPRESS_PROJECT_ID}`, its `record key` as `$CYPRESS_RECORD_KEY` in your repositry secrets (https://github.com/your-name/project-name/settings/secrets/actions).

If you don't want to use Cypress Dashboard, remove `record: true` and the entire `env` block from [`.github/workflows/ci.yml`](https://github.com/kingyue737/vitify-admin/blob/main/.github/workflows/ci.yml):

```yml
- name: Cypress
  uses: cypress-io/github-action@v4
  with:
    install-command: echo
    build: pnpm run build
    start: pnpm run preview
    record: true
    command-prefix: '--'
  env:
    # pass the Dashboard record key as an environment variable
    CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
    # pass GitHub token to allow accurately detecting a build vs a re-run build
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    # pass the project ID from the secrets through environment variable
    CYPRESS_PROJECT_ID: ${{ secrets.CYPRESS_PROJECT_ID }}
```

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

### Documentation

The [documentation](https://kingyue737.github.io/vitify-docs/) of this template is powered by [VitePress](https://vitepress.vuejs.org/) and [DocSearch](https://docsearch.algolia.com/)

Repo: https://github.com/kingyue737/vitify-docs

### Acknowledgement

Inspired by [vitesse](https://github.com/antfu/vitesse) and [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 💖. Thanks for every developer for making frontend community better.

I made this starter template for promptly scaffolding admin projects of my company, along with some good practices I've learned during making these apps.

Currently, plenty of awesome Vue 2 librarys have not migrated to Vue 3 ecosystem, maybe never 😭. There is still a long way to go before the release of version Vuetify v3.1 which includes all components of Vuetify 2. So I struggle with bridging perfect DX of Vue 3 to my Vuetify 2 projects.
It's strongly opinionated, but hope it can help you to avoid detours.

Don't hesitate to open an issue or a discussion, if you meet any problem.
