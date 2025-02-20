import { LiveShop, LiveShopFilter } from './LiveShopTypes'

export class LiveShopRepositoryJson {
  static async getOne({ filter }: { filter: LiveShopFilter }, fields?: string[]): Promise<LiveShop> {
    const liveShop = shop_ctx.mock?.live_shop
    const liveShopResult = liveShop.find(
      item =>
        (filter.hashRoom && item.hashRoom === filter.hashRoom) ||
        (filter.id && item.id === filter.id) ||
        (filter.slug && item.slug === filter.slug)
    )
    if (!liveShopResult) {
      throw new Error('Live Shop not found')
    }
    return liveShopResult
  }
}
