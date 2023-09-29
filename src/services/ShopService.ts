import { ShopService } from '../modules/shop/ShopService'
import { Shop } from '../modules/shop/ShopTypes'
import { ShopConfig, ShopDataConfig } from '../types/ShopTypes'

export class ShopConfigService {
  shop: Shop

  constructor(private config: ShopConfig) {}

  private getApisUrl() {
    const apis = {
      api_editor: this.config.apiEditor,
      api_url: this.config.apiUrl
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
