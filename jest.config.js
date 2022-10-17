/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const apps = require('./src/mocks/apps/apps.json')
const sidebar = require('./src/mocks/sidebar/sidebar.json')
const freight = require('./src/mocks/freight/freight.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  globals: {
    shop_ctx: {
      api_url: 'https://api-storefront.dchomolog.dooca.store/',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wX2lkIjoiNDcifQ.W8gSG3QFu4iqJsWElSSJ726fb1LZHxeJabkNi0PDCQ4',
      domain: 'dcgamer.dchomolog.dooca.store',
      mock: {
        shop: shop,
        apps: apps,
        sidebar: sidebar,
        freight: freight
      }
    }
  }
}
