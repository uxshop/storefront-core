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
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaG9wX2lkIjo0NywidHlwZSI6ImFkbWluIiwiZW1haWwiOiJzaW1hb0Bkb29jYS5jb20uYnIiLCJmaXJzdF9uYW1lIjoiU2NobGF3YSIsImFjdGl2ZSI6dHJ1ZSwiaWF0IjoxNjYyNjU3MzIyfQ.q5GxkXJZeN7xQ3HVN7sqPK1Ls-Ck--hRTAgvSV7RyLs',
      domain: 'dcgamer.dchomolog.dooca.store',
      mock: {
        apps: appsMock,
        sidebar: sidebarMock,
        freight: freightMock,
        newsletter: newsletterMock
      }
    }
  }
}
