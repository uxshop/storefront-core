import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { ShopRepositoryGql } from './ShopRepositoryGql'
import { ShopRepositoryJson } from './ShopRepositoryJson'
import { Shop, ShopFields } from './ShopTypes'

const Repository = () => (shop_ctx.mock?.shop ? ShopRepositoryJson : ShopRepositoryGql)

export class ShopService {
  static async getShop(fields?: Array<ShopFields>): Promise<Shop> {
    try {
      const result: Shop = await Repository().getShop(fields)

      BroadcastService.emit('Shop', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
