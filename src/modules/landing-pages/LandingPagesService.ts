import { LandingPagesRepositoryGql } from './LandingPagesRepositoryGql'
import { LandingPagesRepositoryJson } from './LandingPagesRepositoryJson'
import { LandingPage, LandingPageFields } from './LandingPagesTypes'

const Repository = () => (shop_ctx.mock?.landing_pages ? LandingPagesRepositoryJson : LandingPagesRepositoryGql)

export class LandingPagesService {
  static async getById(id: string, fields?: LandingPageFields[]): Promise<LandingPage<any>> {
    try {
      const result: LandingPage<any> = await Repository().getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: LandingPageFields[]): Promise<LandingPage<any>> {
    try {
      const result: LandingPage<any> = await Repository().getBySlug(slug, fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
