import { OptionsGetPage, PageFields, PageListResponse, PageResponse } from './PageTypes'
import { client } from '../../services/GraphqlService'
import { PagesQueries } from './PagesQueries'
import { Page } from '../../types/PageTypes'

export class PagesRepositoryGql {
  static async getList(fields?: Array<PageFields>): Promise<Array<Page>> {
    const pagesQuery = new PagesQueries(fields)
    const pagesListQuery: string = pagesQuery.listFullQuery()
    try {
      const { pages }: PageListResponse = await client.query(pagesListQuery)

      return pages
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getOne({ fields, filter }: OptionsGetPage): Promise<Page> {
    const pagesQuery = new PagesQueries(fields)
    const pagesGetOneQuery: string = pagesQuery.getOnefullQuery()
    try {
      const { page }: PageResponse = await client.query(pagesGetOneQuery, filter && { filter: filter })

      return page
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: Number, fields?: Array<PageFields>): Promise<Page> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: String, fields?: Array<PageFields>): Promise<Page> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
