import { Sidebar, SidebarFilter } from './SidebarTypes'

export class SidebarRepositoryJson {
  static get(filter?: Array<SidebarFilter>): Sidebar {
    const result = shop_ctx.mock?.sidebar
    return result || {}
  }
}
