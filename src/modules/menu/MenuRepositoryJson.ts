import { MenuFields } from './MenuTypes'

export class MenuRepositoryJson {
  static async getList(fields?: Array<MenuFields>) {
    const result = shop_ctx.mock?.menu
    return result || {}
  }

  static async getById(id: Number, fields?: Array<MenuFields>) {
    const menus = shop_ctx.mock?.menu
    const result = menus && menus.filter(menu => menu.id == id)[0]
    return result || {}
  }
}
