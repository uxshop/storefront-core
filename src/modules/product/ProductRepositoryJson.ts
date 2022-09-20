import { FastSearch, ProductFields } from './ProductTypes'

export class ProductRepositoryJson {
  static async getList() {
    const result = shop_ctx.mock?.product
    return result || {}
  }

  static async getById(id: number, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.product
    return { ...result, edges: result.edges.find(edge => edge.node.id == id) } || {}
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.product
    return { ...result, edges: result.edges.find(edge => edge.node.slug == slug) } || {}
  }
}
