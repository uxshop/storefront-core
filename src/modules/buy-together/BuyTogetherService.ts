import { BuyTogetherRepositoryGql } from './BuyTogetherRepositoryGql'
import { BuyTogether, BuyTogetherFields } from './BuyTogetherTypes'

export class BuyTogetherService {
  static async getByProductId(productId: number, fields?: BuyTogetherFields[]): Promise<BuyTogether> {
    return await BuyTogetherRepositoryGql.getByProductId(productId, fields)
  }

  static async getByProductIdWithValidPromotionDate(
    productId: number,
    fields?: BuyTogetherFields[]
  ): Promise<BuyTogether> {
    const buyTogetherData = await BuyTogetherRepositoryGql.getByProductId(productId, fields)
    console.log('🚀 ~ file: BuyTogetherService.ts:14 ~ BuyTogetherService ~ buyTogetherData:', buyTogetherData)
    if (buyTogetherData && this.checkPromotionDateValid(buyTogetherData)) return buyTogetherData
    return null
  }

  private static checkPromotionDateValid({ dateFrom, dateTo }: BuyTogether) {
    const nowUnixTime = Number(new Date())
    const dateFromUnixTime = Number(new Date(dateFrom + 'T00:00:00'))
    if (!dateTo) return nowUnixTime >= dateFromUnixTime
    const dateToUnixTime = Number(new Date(dateTo + 'T00:00:00'))
    return nowUnixTime >= dateFromUnixTime && nowUnixTime <= dateToUnixTime
  }
}
