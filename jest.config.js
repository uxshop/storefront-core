/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const shop = require('./src/mocks/shop/shop.json')
const apps = require('./src/mocks/apps/apps.json')
const sidebar = require('./src/mocks/sidebar/sidebar.json')
const freight = require('./src/mocks/freight/freight.json')
const newsletter = require('./src/mocks/newsletter/newsletter.json')
const blogPost = require('./src/mocks/blog/blog-post.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  globals: {
    shop_ctx: {
      api_url: 'https://api-storefront.dchomolog.dooca.store/',
      token:
        'eyJ0eXAiOiJKV1QxiLCJhbGciOiJIUzI1NiJ9.eyJzaG9wX2lkIjoxNTI4NSwidHlwZSI6ImFkbWluIiwiZW1haWwiOiJ0aWFnby50ZXJtZUBkb29jYS5jb20uYnIiLCJmaXJzdF9uYW1lIjoiUGx1cyIsImFjdGl2ZSI6dHJ1ZSwiaWF0IjoxNjY2ODA2OTg1fQ.F8OxjCPj9d7lExfsy7SB3G2sQrBqQ0FDZyDIOVZXSjo',
      domain: 'dcgamer.dchomolog.dooca.store',
      mock: {
        apps: apps,
        sidebar: sidebar,
        freight: freight,
        newsletter: newsletter
      }
    }
  }
}
