import { ScriptFields } from './ScriptsTypes'

export class ScriptsRepositoryJson {
  static async getList(fields?: Array<ScriptFields>) {
    const result = process.env.DC_CONFIG.mock?.scripts
    return result || {}
  }

  static async getListByPage(page: String, fields?: Array<ScriptFields>) {
    const scripts = process.env.DC_CONFIG.mock?.scripts
    const result = scripts && scripts.filter(script => script.page == page)
    return result || {}
  }

  static async getListByLocation(location: String, fields?: Array<ScriptFields>) {
    const scripts = process.env.DC_CONFIG.mock?.scripts
    const result = scripts && scripts.filter(script => script.location == location)
    return result || {}
  }
}
