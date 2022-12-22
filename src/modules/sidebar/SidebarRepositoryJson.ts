import { OptionsGetSidebar, Sidebar } from './SidebarTypes'

export class SidebarRepositoryJson {
  static get(filters?: OptionsGetSidebar): Sidebar {
    const mock = shop_ctx.mock?.sidebar
    const result = mock && { ...mock, filtered: [...mock.filtered] }
    !filters && this.adjustFilteredField(result)
    return result || {}
  }

  private static adjustFilteredField(result: any) {
    result?.filtered?.pop()
    result?.filtered?.push(null)
  }
}
