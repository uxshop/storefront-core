import { ScriptFields } from './ScriptsTypes'

export class ScriptsRepositoryJson {
  static async getList(fields?: ScriptFields[]) {
    const result = shop_ctx.mock?.scripts
    return result || {}
  }

  static async getListByPage(page: string, fields?: ScriptFields[]) {
    const scripts = shop_ctx.mock?.scripts
    const result = scripts && scripts.filter(script => script.page == page)
    return result || {}
  }

  static async getListByLocation(location: string, fields?: ScriptFields[]) {
    const scripts = shop_ctx.mock?.scripts
    const result = scripts && scripts.filter(script => script.location == location)
    return result || {}
  }
}
