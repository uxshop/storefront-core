import { ScriptsRepositoryGql } from './ScriptsRepositoryGql'
import { ScriptsRepositoryJson } from './ScriptsRepositoryJson'
import { Script, ScriptFields } from './ScriptsTypes'

const Repository = shop_ctx.mock?.scripts ? ScriptsRepositoryJson : ScriptsRepositoryGql

export class ScriptsService {
  static async getList(fields?: ScriptFields[]): Promise<Script[]> {
    const result: Script[] = await Repository.getList(fields)
    return result
  }

  static async getListByPage(page: string, fields?: ScriptFields[]): Promise<Script[]> {
    const result: Script[] = await Repository.getListByPage(page, fields)
    return result
  }

  static async getListByLocation(location: string, fields?: ScriptFields[]): Promise<Script[]> {
    const result: Script[] = await Repository.getListByLocation(location, fields)
    return result
  }
}
