import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { client } from '../../services/GraphqlService'
import { LandingPagesQueries } from './LandingPagesQueries'
import { LandingPage, LandingPageFields, LandingPageResponse, OptionsGetLandingPage } from './LandingPagesTypes'

export class LandingPagesRepositoryGql {
  private static async get({ fields, filter }: OptionsGetLandingPage): Promise<LandingPage<any>> {
    const landingPagesQuery = new LandingPagesQueries(fields)
    const landingPagesGetQuery: string = landingPagesQuery.getOneFullQuery()
    const { landingPage }: LandingPageResponse = await client.query(
      landingPagesGetQuery,
      filter && { filter: { ...filter } }
    )

    landingPage.content = landingPage.content ? JSON.parse(landingPage.content) : {}
    BroadcastService.emit('LandingPages', landingPage)

    return landingPage
  }

  static async getById(id: number, fields?: Array<LandingPageFields>): Promise<LandingPage<any>> {
    return this.get({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: string, fields?: Array<LandingPageFields>): Promise<LandingPage<any>> {
    return this.get({ fields: fields || null, filter: { slug: slug } })
  }
}
