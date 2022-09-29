/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const apps = require('./src/mocks/apps/apps.json')
const sidebar = require('./src/mocks/sidebar/sidebar.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  globals: {
    shop_ctx: {
      api_url: 'https://api-storefront.dchomolog.dooca.store/',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaG9wX2lkIjoxNDkzOH0.3GhJ1HSOuFVy3BRA1XfZmS7dnSnugJK5giLXo0jNeQ4',
      domain: 'diovani.dchomolog.dooca.store',
      mock: {
        shop: shop,
        apps: apps,
        sidebar: sidebar
      }
    }
  }
}
