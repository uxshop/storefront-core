import { Aggregator, ProductFields, ProductListFilter } from './ProductTypes'

interface OptionsGetList {
  filter: ProductListFilter
  agg?: Aggregator
  fields?: Array<ProductFields>
}
export class ProductRepositoryJson {
  static async getList({ filter, agg = { field: 'product_id' }, fields }: OptionsGetList) {
    const result = shop_ctx.mock?.product?.list
    return result || {}
  }

  static async getById(id: number, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.product?.single
    return result
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>) {
    const result = shop_ctx.mock?.product?.single
    return result
  }
}
