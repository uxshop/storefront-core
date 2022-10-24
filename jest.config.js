/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const apps = require('./src/mocks/apps/apps.json')
const sidebar = require('./src/mocks/sidebar/sidebar.json')
const freight = require('./src/mocks/freight/freight.json')
const newsletter = require('./src/mocks/newsletter/newsletter.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  globals: {
    shop_ctx: {
      api_url: 'https://api-storefront.dchomolog.dooca.store/',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaG9wX2lkIjoxNDkzOCwidHlwZSI6ImFkbWluIiwiZW1haWwiOiJkaW92YW5pQGRvb2NhLmNvbS5iciIsImZpcnN0X25hbWUiOiJEaW92YW5pIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE2NTk3MDAzNzR9.iOUS4aJlFuUQuONtalm8yeBQNN1GqmREkq9Lxf-K5H0',
      domain: 'dcgamer.dchomolog.dooca.store',
      mock: {
        shop: shop,
        apps: apps,
        sidebar: sidebar,
        freight: freight,
        newsletter: newsletter
      }
    }
  }
}
