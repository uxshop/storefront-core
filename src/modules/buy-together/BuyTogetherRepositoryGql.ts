import { getClient } from '../../services/GraphqlService'
import { BuyTogether, BuyTogetherFields } from './BuyTogetherTypes'
import { BuyTogetherQueries } from './BuyTogetherQueries'

export class BuyTogetherRepositoryGql {
  static async getByProductId(productId: number, fields?: BuyTogetherFields[]): Promise<BuyTogether> {
    const buyTogetherQuery = new BuyTogetherQueries(fields)
    const buyTogetherGetOneQuery = buyTogetherQuery.getOneFullQuery('restrict')
    const { buyTogether } = (await getClient().query(buyTogetherGetOneQuery, { filter: { productId } })) as {
      buyTogether: BuyTogether
    }
    return buyTogether
  }
}
