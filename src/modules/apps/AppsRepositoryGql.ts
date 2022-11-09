import { client } from '../../services/GraphqlService'
import { AppsQueries } from './AppsQueries'
import { Apps, AppsFields, AppsResponse } from './AppsTypes'

export class AppsRepositoryGql {
  static async getById(id: number, fields?: Array<AppsFields>): Promise<Apps> {
    const appsQuery = new AppsQueries(fields)
    const getAppsQuery: string = appsQuery.getApps()
    const { apps }: AppsResponse = await client.query(getAppsQuery, { filter: { id: id } })

    return apps
  }
}
