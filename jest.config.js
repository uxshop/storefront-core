/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const apps = require('./src/mocks/apps/apps.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  globals: {
    shop: {
      api_url: 'https://api-storefront.dchomolog.dooca.store/',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wX2lkIjo0N30.gfPoCGYJ4dBQe_tW8_H6qC-AYkLsm76SG4qC4zjPPrY',
      domain: 'https://dcgamer.dchomolog.dooca.store/',
      mock: {
        shop: shop,
        apps: apps
      }
    }
  }
}
