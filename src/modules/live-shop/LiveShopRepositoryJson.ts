import liveShopJsonMock from '../../mocks/live-shop/live-shop.json'
import { LiveShop } from './LiveShopTypes'

export class LiveShopRepositoryJson {
  static async getOne(filter: { id?: number; hash?: string; slug?: string }, fields?: string[]): Promise<LiveShop> {
    const liveShop = liveShopJsonMock
    const liveShopResult = liveShop.find(
      item =>
        (filter.hash && item.hashRoom === filter.hash) ||
        (filter.id && item.id === filter.id) ||
        (filter.slug && item.slug === filter.slug)
    )
    if (!liveShopResult) {
      throw new Error('Live Shop not found')
    }
    return liveShopResult
  }
}
