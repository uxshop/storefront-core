import { getClient } from '../../services/GraphqlService'
import { AppQueries } from './AppQueries'
import { App, AppFields, AppResponse } from './AppTypes'

export class AppRepositoryGql {
  static async getById(id: number, fields?: AppFields[]): Promise<App> {
    const appQuery = new AppQueries(fields)
    const getAppQuery: string = appQuery.getApp()
    const { app }: AppResponse = await getClient().query(getAppQuery, { filter: { id: id } })

    return app
  }
}
