import { client } from '../../services/GraphqlService'
import { SettingsQueries } from './SettingsQueries'
import { SettingFilter, SettingResponse } from './SettingsTypes'

export class SettingsRepositoryGql {
  static async getOne(filter?: SettingFilter) {
    const settingsQuery = new SettingsQueries()
    const settingsGetOneQuery: string = settingsQuery.getOnefullQuery()
    const { setting } = await client.query<SettingResponse>(settingsGetOneQuery, filter && { filter: { ...filter } })
    const data = JSON.parse(setting.data)

    return { ...setting, data }
  }
}
