import { Pagination } from '../../types/PaginationTypes'
import { ProductRepositoryGql } from './ProductRepositoryGql'
import { ProductRepositoryJson } from './ProductRepositoryJson'
import { Product, ProductFields, ProductList } from './ProductTypes'
import { normalizePagination } from '../../helpers/PaginationHelper'

const Repository = shop_ctx.mock?.product ? ProductRepositoryJson : ProductRepositoryGql

export class ProductService {
  static async getListByCategorySlug(
    categorySlug: string,
    pagination: Pagination,
    fields?: Array<ProductFields>
  ): Promise<ProductList> {
    const result: ProductList = await Repository.getList({
      fields: fields || null,
      filter: { ...normalizePagination(pagination?.page || 1, pagination?.items), categorySlug: categorySlug }
    })
    return result
  }

  static async getListByBrandSlug(
    brandSlug: string,
    pagination: Pagination,
    fields?: Array<ProductFields>
  ): Promise<ProductList> {
    const result: ProductList = await Repository.getList({
      fields: fields || null,
      filter: { ...normalizePagination(pagination?.page || 1, pagination?.items), brandSlug: brandSlug }
    })
    return result
  }

  static async getByProductId(productId: string, fields?: Array<ProductFields>): Promise<Product> {
    const result: Product = await Repository.getByProductId(Number(productId), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>): Promise<Product> {
    const result: Product = await Repository.getBySlug(slug, fields)
    return result
  }
}
