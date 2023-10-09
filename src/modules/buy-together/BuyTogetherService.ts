import { BuyTogetherRepositoryGql } from './BuyTogetherRepositoryGql'
import { BuyTogether, BuyTogetherFields } from './BuyTogetherTypes'

export class BuyTogetherService {
  static async getByProductId(productId: number, fields?: BuyTogetherFields[]): Promise<BuyTogether> {
    return await BuyTogetherRepositoryGql.getByProductId(productId, fields)
  }
}
