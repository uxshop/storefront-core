import { ProductRepositoryGql } from './ProductRepositoryGql'
import { ProductRepositoryJson } from './ProductRepositoryJson'
import { Aggregator, Product, ProductFields, ProductList, ProductListFilter } from './ProductTypes'
import { normalizePagination } from '../../helpers/PaginationHelper'

const Repository = shop_ctx.mock?.products ? ProductRepositoryJson : ProductRepositoryGql
interface OptionsGetList {
  filter: ProductListFilter
  agg?: Aggregator
  fields?: Array<ProductFields>
}

export class ProductService {
  static async getList({ filter, agg = { field: 'product_id' }, fields }: OptionsGetList): Promise<ProductList> {
    const { items, sidebarFilters, ...remainFilter } = filter
    const result: ProductList = await Repository.getList({
      fields: fields || null,
      filter: { ...normalizePagination(filter?.page || 1, filter?.items), ...remainFilter },
      agg: agg
    })
    return result
  }

  static async getById(productId: string, fields?: Array<ProductFields>): Promise<Product> {
    const result: Product = await Repository.getById(Number(productId), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>): Promise<Product> {
    const result: Product = await Repository.getBySlug(slug, fields)
    return result
  }
}
