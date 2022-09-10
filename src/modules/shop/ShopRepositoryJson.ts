import { ShopFields } from './ShopTypes'

export class ShopRepositoryJson {
  static async getShop(fields?: Array<ShopFields>) {
    const result = shop_ctx.mock?.shop

    return result || {}
  }
}
