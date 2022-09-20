import { FastSearch, ProductFields } from './ProductTypes'

export class ProductRepositoryJson {
  static async getList() {
    const result = shop_ctx.mock?.product
    return result || {}
  }

  static async getByProductId(productId: number, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.product
    return { ...result, edges: result.edges.find(edge => edge.node.id == productId) } || {}
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.product
    return { ...result, edges: result.edges.find(edge => edge.node.slug == slug) } || {}
  }
}
