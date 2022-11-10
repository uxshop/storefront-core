import { client } from '../../services/GraphqlService'
import { AppsQueries } from './AppsQueries'
import { App, AppsFields, AppsResponse } from './AppsTypes'

export class AppsRepositoryGql {
  static async getById(id: number, fields?: AppsFields[]): Promise<App> {
    const appsQuery = new AppsQueries(fields)
    const getAppsQuery: string = appsQuery.getApps()
    const { app }: AppsResponse = await client.query(getAppsQuery, { filter: { id: id } })

    return app
  }
}
