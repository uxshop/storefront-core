import { client } from '../../services/GraphqlService'
import { SidebarQueries } from './SidebarQueries'
import { Sidebar, SidebarFilter, SidebarResponse } from './SidebarTypes'
import { nullable } from '../../types/HelpersTypes'

export class SidebarRepositoryGql {
  static async get(filter?: nullable<SidebarFilter[]>): Promise<Sidebar> {
    const sidebarQuery = new SidebarQueries()
    const sidebarGetQuery: string = sidebarQuery.getQuery()

    const { sidebarFilters: sidebar }: SidebarResponse = await client.query(
      sidebarGetQuery,
      filter && { filters: [...filter] }
    )

    return sidebar
  }
}
