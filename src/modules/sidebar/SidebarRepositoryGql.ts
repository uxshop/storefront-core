import { client } from '../../services/GraphqlService'
import { SidebarQueries } from './SidebarQueries'
import { Sidebar, SidebarFilter, SidebarResponse } from './SidebarTypes'

export class SidebarRepositoryGql {
  static async get(filter: SidebarFilter): Promise<Sidebar> {
    const sidebarQuery = new SidebarQueries()
    const sidebarGetQuery: string = sidebarQuery.getQuery()

    try {
      const { sidebarFilters: sidebar }: SidebarResponse = await client.query(
        sidebarGetQuery,
        filter && { filters: { ...filter } }
      )

      return sidebar
    } catch (error) {
      throw new Error(error)
    }
  }
}
