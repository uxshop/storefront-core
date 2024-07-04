import { getClient } from '../../services/GraphqlService'
import { LiveShopQueries } from './LiveShopQueries'
import { LiveShop, LiveShopFields, LiveShopResponse } from './LiveShopTypes'

export class LiveShopRepositoryGql {
  static async getOne(
    filter: { filter: { id?: number; hash?: string; slug?: string } },
    fields?: LiveShopFields[]
  ): Promise<LiveShop> {
    const liveShopQuery = new LiveShopQueries(fields)
    const fullQuery: string = liveShopQuery.getOneFullQuery()
    const { liveShop }: LiveShopResponse = await getClient().query(fullQuery, { ...filter })

    return liveShop
  }
}
