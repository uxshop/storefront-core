import { ProductFieldQuery } from './ProductFieldTypes'

export class ProductFieldRepositoryJson {
  static async getById(id: number, fields?: ProductFieldQuery) {
    const result = shop_ctx.mock?.productsFields?.edges?.find(edge => edge?.node?.product_id == id)?.node
    return result
  }
}
