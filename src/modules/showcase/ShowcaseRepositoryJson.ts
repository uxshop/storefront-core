import { FastSearch, ShowcaseFields } from './ShowcaseTypes'

export class ShowcaseRepositoryJson {
  static async getList() {
    const result = shop_ctx.mock?.showcase
    return result || {}
  }

  static async getById(id: number, fields?: Array<ShowcaseFields>) {
    const result = shop_ctx.mock?.showcase
    return { ...result, edges: result.edges.find(edge => edge.node.id == id) } || {}
  }

  static async getBySlug(slug: string, fields?: Array<ShowcaseFields>) {
    const result = shop_ctx.mock?.showcase
    return { ...result, edges: result.edges.find(edge => edge.node.slug == slug) } || {}
  }

  static async search(queryString: string, fields?: Array<ShowcaseFields>) {
    const result = shop_ctx.mock?.showcase
    return { ...result, edges: result.edges[0] } || {}
  }
}
