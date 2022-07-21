import { PageFields } from './PageTypes'

export class PagesRepositoryJson {
  static async getList(fields?: Array<PageFields>) {
    const result = process.env.DC_CONFIG.mock?.pages
    return result || {}
  }

  static async getById(id: Number, fields?: Array<PageFields>) {
    const pages = process.env.DC_CONFIG.mock?.pages
    const result = pages && pages.filter(page => page.id == id)
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<PageFields>) {
    const pages = process.env.DC_CONFIG.mock?.pages
    const result = pages && pages.filter(page => page.slug == slug)
    return result || {}
  }
}
