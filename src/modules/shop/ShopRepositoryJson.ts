import { ShopFields } from './ShopTypes'

export class ShopRepositoryJson {
  static async getShop(fields?: Array<ShopFields>) {
    const result = process.env.DC_CONFIG.mock?.shop

    return result || {}
  }
}
