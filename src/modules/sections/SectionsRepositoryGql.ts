import { client } from '../../services/GraphqlService'
import { SectionsQueries } from './SectionsQueries'
import { Section, SectionFilter, SectionResponse } from './SectionsTypes'

export class SectionsRepositoryGql {
  static async getOne(filter?: SectionFilter): Promise<Section<unknown>> {
    const sectionsQuery = new SectionsQueries()
    const sectionsGetOneQuery: string = sectionsQuery.getOnefullQuery()

    try {
      const { section }: SectionResponse = await client.query(sectionsGetOneQuery, filter && { filter: { ...filter } })

      const data = JSON.parse(section.data)

      return { ...section, data }
    } catch (error) {
      throw new Error(error)
    }
  }
}
