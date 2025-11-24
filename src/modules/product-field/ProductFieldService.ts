import type { ProductField, ProductFieldQuery } from './ProductFieldTypes'
import { ProductFieldRepositoryGql } from './ProductFieldRepositoryGql'
import { ProductFieldRepositoryJson } from './ProductFieldRepositoryJson'

const Repository = () => (shop_ctx.mock?.productsFields ? ProductFieldRepositoryJson : ProductFieldRepositoryGql)

export class ProductFieldService {
  static async getById(productId: string, fields: ProductFieldQuery): Promise<ProductField> {
    const result: ProductField = await Repository().getById(Number(productId), fields)
    return result
  }
}
