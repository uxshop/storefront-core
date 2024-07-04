import liveShopJsonMock from '../../mocks/live-shop/live-shop.json'
import { LiveShop } from './LiveShopTypes'

export class LiveShopRepositoryJson {
  static async getByHash(hash: string, fields?: string[]): Promise<LiveShop> {
    const liveShop = liveShopJsonMock
    const result = liveShop.find(item => item.hashRoom === hash)
    return result
  }
}
