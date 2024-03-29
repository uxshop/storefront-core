import { Aggregator, ProductFields, ProductListFilter } from './ProductTypes'

interface OptionsGetList {
  filter: ProductListFilter
  agg?: Aggregator
  fields?: Array<ProductFields>
}
export class ProductRepositoryJson {
  static async getList({ filter, agg = { field: ['productId'] }, fields }: OptionsGetList) {
    const result = shop_ctx.mock?.products
    return result || {}
  }

  static async getById(id: number, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.products?.edges?.find(edge => edge?.node?.product_id == id)?.node
    return result
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.products?.edges?.find(edge => edge?.node?.slug == slug)?.node
    return result
  }
}
