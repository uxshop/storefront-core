import { loadEnv } from 'vite'

import { SchemaService } from './SchemaService'

const URL_APIS = {
  homolog: {
    api_url: 'https://api.storefront.dchomolog.dooca.store/',
    api_editor: 'https://api.editor.dchomolog.dooca.store/'
  },
  production: {
    api_url: 'https://api.storefront.dooca.store/',
    api_editor: 'https://api.editor.dooca.store/'
  }
}

export function shopPlugin(shopConfig) {
  return {
    name: 'vite-plugin-shop',
    config(config, options) {
      if (!shopConfig) throw new Error('config is required')

      process.env = { ...process.env, ...loadEnv(options.mode, process.cwd()) }
      const apis = options.mode !== 'production' ? URL_APIS.homolog : URL_APIS.production

      config.base = shopConfig.base_path || '/'
      config.define = {
        ...config.define,
        shop_ctx: {
          api_url: shopConfig.api_url || apis.api_url,
          api_editor: shopConfig.api_editor || apis.api_editor,
          token: shopConfig.token,
          domain: shopConfig.domain,
          mock: shopConfig.mock || null,
          base_path: shopConfig.base_path || '/'
        }
      }
    },
    async buildStart(config) {
      try {
        const themePath = process.cwd()
        const schemaService = new SchemaService()
        const settingsBundle = await schemaService.generateSettingsBundle(themePath)
        const sectionsBundle = await schemaService.generateSectionBundle(themePath)
        const presetsBundle = await schemaService.generatePresetBundle(themePath)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
