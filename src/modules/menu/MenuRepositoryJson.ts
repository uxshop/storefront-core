import { MenuFields, OptionsGetMenuList } from './MenuTypes'

export class MenuRepositoryJson {
  static async getList(optionsGetMenuList?: OptionsGetMenuList) {
    const result = shop_ctx.mock?.menu
    return result || {}
  }

  static async getById(id: number, fields?: MenuFields[]) {
    const menus = shop_ctx.mock?.menu
    const result = menus && menus.find(menu => menu.id == id)
    return result || {}
  }
}
