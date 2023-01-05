import { getClient } from '../../services/GraphqlService'
import { SlugQueries } from './SlugQueries'
import { SlugFilter, SlugResponse } from './SlugType'

export class SlugRepositoryGql {
  static async getOne(filter?: SlugFilter) {
    const slugQuery = new SlugQueries()
    const slugGetOneQuery: string = slugQuery.getOneFullQuery()
    const { slug } = await getClient().query<SlugResponse>(slugGetOneQuery, filter && { filter: { ...filter } })

    const data = JSON.parse(slug.data)

    return { ...slug, data }
  }
}
