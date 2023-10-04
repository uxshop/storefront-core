import { getClient } from '../../services/GraphqlService'
import { BuyTogether, BuyTogetherFields } from './BuyTogetherTypes'
import { BuyTogetherQueries } from './BuyTogetherQueries'

export class BuyTogetherRepositoryGql {
  static async getByProductId(productId: number, fields?: BuyTogetherFields[]): Promise<BuyTogether> {
    const buyTogether = new BuyTogetherQueries(fields)
    const buyTogetherGetOneQuery = buyTogether.getOneFullQuery()
    return await getClient().query(buyTogetherGetOneQuery, { filter: { productId } })
  }
}
