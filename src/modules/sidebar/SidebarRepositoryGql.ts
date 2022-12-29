import { getClient } from '../../services/GraphqlService'
import { SidebarQueries } from './SidebarQueries'
import { OptionsGetSidebar, Sidebar, SidebarResponse } from './SidebarTypes'

export class SidebarRepositoryGql {
  static async get(filters?: OptionsGetSidebar): Promise<Sidebar> {
    const sidebarQuery = new SidebarQueries()
    const sidebarGetQuery: string = sidebarQuery.getQuery()

    const { sidebarFilters: sidebar }: SidebarResponse = await getClient().query(sidebarGetQuery, {
      ...filters
    })

    return sidebar
  }
}
