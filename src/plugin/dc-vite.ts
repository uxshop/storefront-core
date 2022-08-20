import { loadEnv } from 'vite'
import { SchemaService } from './SchemaService'

export function doocaPlugin(dcConfig) {
  return {
    name: 'vite-plugin-dooca',
    config(config, options) {
      if (!dcConfig) throw new Error('dooca config is required')

      process.env = { ...process.env, ...loadEnv(options.mode, process.cwd()) }

      config.define = {
        ...config.define,
        dc_config: {
          api_url: process.env.VITE_API_URL,
          api_editor: process.env.VITE_API_EDITOR,
          token: dcConfig.token,
          domain: dcConfig.domain,
          mock: dcConfig.mock || null
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
