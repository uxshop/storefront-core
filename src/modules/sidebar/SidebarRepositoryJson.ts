import { nullable } from 'src/types/HelpersTypes'
import { Sidebar, SidebarFilter } from './SidebarTypes'

export class SidebarRepositoryJson {
  static get(filter?: nullable<SidebarFilter[]>): Sidebar {
    const mock = shop_ctx.mock?.sidebar
    const result = mock && { ...mock, filtered: [...mock.filtered] }
    !filter && this.adjustFilteredField(result)
    return result || {}
  }

  private static adjustFilteredField(result: any) {
    result?.filtered?.pop()
    result?.filtered?.push(null)
  }
}
