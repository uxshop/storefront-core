import { LandingPageFields } from './LandingPagesTypes'

export class LandingPagesRepositoryJson {
  static async getById(id: number, fields?: Array<LandingPageFields>) {
    const landingPages = shop_ctx.mock?.landing_pages
    const result = landingPages && landingPages.filter(landingPage => landingPage.id == id)
    return result || {}
  }

  static async getBySlug(slug: string, fields?: Array<LandingPageFields>) {
    const landingPages = shop_ctx.mock?.landing_pages
    const result = landingPages && landingPages.filter(landingPage => landingPage.slug == slug)
    return result || {}
  }
}
