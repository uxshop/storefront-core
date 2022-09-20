import { ProductRepositoryGql } from './ProductRepositoryGql'
import { ProductRepositoryJson } from './ProductRepositoryJson'
import { Product, ProductFields, ProductList, ProductListFilter } from './ProductTypes'
import { normalizePagination } from '../../helpers/PaginationHelper'

const Repository = shop_ctx.mock?.product ? ProductRepositoryJson : ProductRepositoryGql
export class ProductService {
  static async getList(filter: ProductListFilter, fields?: Array<ProductFields>): Promise<ProductList> {
    const result: ProductList = await Repository.getList({
      fields: fields || null,
      filter: { ...normalizePagination(filter?.page || 1, filter?.items), ...filter }
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
