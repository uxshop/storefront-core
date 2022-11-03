import { ShopService } from '../modules/shop/ShopService'
import { Shop } from '../modules/shop/ShopTypes'
import { ShopConfig, ShopDataConfig } from '../types/ShopTypes'

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

export class ShopConfigService {
  shop: Shop

  constructor(private config: ShopConfig) {}

  private getApisUrl() {
    const defaultApis = import.meta.env.MODE !== 'production' ? URL_APIS.homolog : URL_APIS.production
    const apis = {
      api_editor: this.config.apiEditor || defaultApis.api_editor,
      api_url: this.config.apiUrl || defaultApis.api_url
    }
    return apis
  }

  private async getSettings(): Promise<Shop> {
    return await ShopService.getShop()
  }

  private getConfig(): ShopConfig {
    return {
      ...this.getApisUrl(),
      token: this.config.token,
      domain: this.shop.domain || null,
      mock: this.config.mock || null,
      basePath: this.config.basePath || '/'
    }
  }

  private async bootstrap(): Promise<ShopDataConfig> {
    window.shop.config = this.getConfig()
    this.shop = await this.getSettings()

    return {
      config: this.getConfig(),
      settings: this.shop
    }
  }

  static async setup(config) {
    const shopService = new ShopConfigService(config)
    await shopService.bootstrap()
  }
}
