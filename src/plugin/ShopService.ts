import { ShopService } from '../modules/shop/ShopService'
import { Shop } from '../modules/shop/ShopTypes'
import { ShopConfig } from '../types/ShopTypes'

export class ShopConfigService {
  shopSettings: Shop

  constructor(private config: ShopConfig) {}

  private async getSettings(): Promise<Shop> {
    return await ShopService.getShop()
  }

  private async bootstrap(): Promise<void> {
    this.shopSettings = await this.getSettings()

    shop.settings = this.shopSettings
  }

  static async setup(config: ShopConfig) {
    const shopService = new ShopConfigService(shop)
    await shopService.bootstrap()
  }
}
