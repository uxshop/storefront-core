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

export function doocaPlugin(dcConfig) {
  return {
    name: 'vite-plugin-dooca',
    config(config, options) {
      if (!dcConfig) throw new Error('dooca config is required')

      process.env = { ...process.env, ...loadEnv(options.mode, process.cwd()) }
      const apis = options.mode !== 'production' ? URL_APIS.homolog : URL_APIS.production

      config.define = {
        ...config.define,
        base: dcConfig.base_path || null,
        dc_config: {
          api_url: dcConfig.api_url || apis.api_url,
          api_editor: dcConfig.api_editor || apis.api_editor,
          token: dcConfig.token,
          domain: dcConfig.domain,
          mock: dcConfig.mock || null,
          base_path: dcConfig.base_path || '/'
        }
      }
    },
    async buildStart(config) {
      try {
        const themePath = process.cwd()
        const schemaService = new SchemaService()
        const settingsBundle = await schemaService.generateSettingsBundle(themePath)
        const sectionsBundle = await schemaService.generateSectionBundle(themePath)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
