/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const appsMock = require('./src/mocks/apps/apps.json')
const sidebarMock = require('./src/mocks/sidebar/sidebar.json')
const freightMock = require('./src/mocks/freight/freight.json')
const newsletterMock = require('./src/mocks/newsletter/newsletter.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './src',
  globals: {
    shop_ctx: {
      api_url: 'https://api-storefront.dchomolog.dooca.store/',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaG9wX2lkIjoxMDM3NzksInR5cGUiOiJhZG1pbiIsImVtYWlsIjoic2ltYW8ubWV5cmVyQGJhZ3kuY29tLmJyIiwiZmlyc3RfbmFtZSI6IlNpbVx1MDBlM28iLCJhY3RpdmUiOnRydWUsImlhdCI6MTY5NTE1MjU2NX0.56NBX4cX4-fAt0CehPUNqCSMs3OTa617ImXlyZQ8nRA',
      domain: 'sapato-do-simon.homolog.bagypro.com',
      mock: {}
    }
  }
}
