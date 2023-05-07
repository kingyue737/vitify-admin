const route = require('volar-plugin-vue-router').default

module.exports = {
  services: [
    route({ path: 'src/route-meta.d.ts', tsconfig: './tsconfig.app.json' }),
  ],
}
