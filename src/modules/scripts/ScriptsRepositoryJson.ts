import { ScriptFields } from './ScriptsTypes'

export class ScriptsRepositoryJson {
  static async getList(fields?: Array<ScriptFields>) {
    const result = shop_ctx.mock?.scripts
    return result || {}
  }

  static async getListByPage(page: string, fields?: Array<ScriptFields>) {
    const scripts = shop_ctx.mock?.scripts
    const result = scripts && scripts.filter(script => script.page == page)
    return result || {}
  }

  static async getListByLocation(location: string, fields?: Array<ScriptFields>) {
    const scripts = shop_ctx.mock?.scripts
    const result = scripts && scripts.filter(script => script.location == location)
    return result || {}
  }
}
