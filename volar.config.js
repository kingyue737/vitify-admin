const route = require('volar-plugin-vue-router')

module.exports = {
  plugins: [
    route({ path: 'src/route-meta.d.ts', tsconfig: './tsconfig.app.json' }),
  ],
}
