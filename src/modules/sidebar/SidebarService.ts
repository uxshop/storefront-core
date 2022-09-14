import { SidebarRepositoryGql } from './SidebarRepositoryGql'
import { SidebarRepositoryJson } from './SidebarRepositoryJson'
import { Sidebar, SidebarFilter } from './SidebarTypes'

const Repository = shop_ctx.mock?.sidebar ? SidebarRepositoryJson : SidebarRepositoryGql

export class SidebarService {
  static async get(filter?: Array<SidebarFilter>): Promise<Sidebar> {
    const result: Sidebar = await Repository.get(filter)
    return result
  }
}
