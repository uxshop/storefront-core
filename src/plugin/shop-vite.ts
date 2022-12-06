import { IndexHtmlTransformResult, loadEnv } from 'vite'
import { SchemaService } from './SchemaService'

const URL_APIS = {
  api_url: 'https://api.storefront.dooca.store/',
  api_editor: 'https://api.editor.dooca.store/'
}

export function shopPlugin(shopConfig) {
  return {
    name: 'vite-plugin-shop',
    config(config, options) {
      if (!shopConfig) throw new Error('config is required')

      process.env = { ...process.env, ...loadEnv(options.mode, process.cwd()) }

      config.base = shopConfig.base_path || '/'
      config.define = {
        ...config.define,
        shop_ctx: {
          api_url: shopConfig.api_url || URL_APIS.api_url,
          api_editor: shopConfig.api_editor || URL_APIS.api_editor,
          token: shopConfig.token,
          domain: shopConfig.domain,
          mock: shopConfig.mock || null,
          base_path: shopConfig.base_path || '/'
        }
      }
    },
    transformIndexHtml(html: string): IndexHtmlTransformResult {
      const URL_ASSETS = process.env.VITE_URL_ASSETS || 'https://assets-storefront.s3.amazonaws.com/assets/index.js'

      return {
        html: html,
        tags: [{ tag: 'script', attrs: { async: '', src: URL_ASSETS, defer: '' }, injectTo: 'body' }]
      }
    },
    async buildStart(config) {
      try {
        const themePath = process.cwd()
        const schemaService = new SchemaService()
        await schemaService.generateSettingsBundle(themePath)
        await schemaService.generateSectionBundle(themePath)
        await schemaService.generatePresetBundle(themePath)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
