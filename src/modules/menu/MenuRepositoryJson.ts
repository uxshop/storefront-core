import { MenuFields } from './MenuTypes'

export class MenuRepositoryJson {
  static async getList(fields?: MenuFields[]) {
    const result = shop_ctx.mock?.menu
    return result || {}
  }

  static async getById(id: number, fields?: MenuFields[]) {
    const menus = shop_ctx.mock?.menu
    const result = menus && menus.find(menu => menu.id == id)[0]
    return result || {}
  }
}
