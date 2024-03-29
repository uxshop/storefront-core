import { getClient } from '../../services/GraphqlService'
import { ScriptsQueries } from './ScriptsQueries'
import { OptionsGetScripts, Script, ScriptFields, ScriptsResponse } from './ScriptsTypes'

export class ScriptsRepositoryGql {
  private static async get(optionsGetScripts: OptionsGetScripts): Promise<Script[]> {
    const { fields, filter } = optionsGetScripts
    const scriptsQuery = new ScriptsQueries(fields)
    const getScriptsQuery: string = scriptsQuery.listFullQuery()
    const { scripts }: ScriptsResponse = await getClient().query(getScriptsQuery, filter && { filter: { ...filter } })

    return scripts
  }

  static async getList(fields?: ScriptFields[]): Promise<Script[]> {
    return this.get({ fields: fields || null })
  }

  static async getListByPage(page: string, fields?: ScriptFields[]): Promise<Script[]> {
    return this.get({ filter: { page: page }, fields: fields || null })
  }

  static async getListByLocation(location: string, fields?: ScriptFields[]): Promise<Script[]> {
    return this.get({ filter: { location: location }, fields: fields || null })
  }
}
