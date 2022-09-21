import { Aggregator, ProductFields, ProductListFilter } from './ProductTypes'

interface OptionsGetList {
  filter: ProductListFilter
  agg?: Aggregator
  fields?: Array<ProductFields>
}
export class ProductRepositoryJson {
  static async getList({ filter, agg = { field: 'product_id' }, fields }: OptionsGetList) {
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
