import { PageFields } from './PageTypes'

export class PagesRepositoryJson {
  static async getList(fields?: Array<PageFields>) {
    const result = shop_ctx.mock?.pages
    return result || {}
  }

  static async getById(id: Number, fields?: Array<PageFields>) {
    const result = shop_ctx.mock?.page
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<PageFields>) {
    const result = shop_ctx.mock?.page
    return result || {}
  }
}
