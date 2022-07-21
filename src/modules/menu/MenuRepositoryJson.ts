import { MenuFields } from './MenuTypes'

export class MenuRepositoryJson {
  static async getList(fields?: Array<MenuFields>) {
    const result = process.env.DC_CONFIG.mock?.menu
    return result || {}
  }

  static async getById(id: Number, fields?: Array<MenuFields>) {
    const menus = process.env.DC_CONFIG.mock?.menu
    const result = menus && menus.filter(menu => menu.id == id)[0]
    return result || {}
  }
}
