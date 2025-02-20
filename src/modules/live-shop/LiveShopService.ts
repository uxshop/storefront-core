import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { LiveShopRepositoryGql } from './LiveShopRepositoryGql'
import { LiveShopRepositoryJson } from './LiveShopRepositoryJson'
import { LiveShop, LiveShopFields } from './LiveShopTypes'

const Repository = () => (shop_ctx.mock?.live_shop ? LiveShopRepositoryJson : LiveShopRepositoryGql)

export class LiveShopService {
  static async getByHash(hashRoom: string, fields?: LiveShopFields[]): Promise<LiveShop> {
    try {
      const result: LiveShop = await Repository().getOne({ filter: { hashRoom } }, fields)
      BroadcastService.emit('LiveShop', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
  static async getById(id: number, fields?: LiveShopFields[]): Promise<LiveShop> {
    try {
      const result: LiveShop = await Repository().getOne({ filter: { id } }, fields)
      BroadcastService.emit('LiveShop', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
