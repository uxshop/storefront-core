import { OptionsGetProductField, ProductField, ProductFieldQuery, ProductFieldResponse } from './ProductFieldTypes'
import { ProductFieldQueries } from './ProductFieldQueries'
import { getClient } from '../../services/GraphqlService'

export class ProductFieldRepositoryGql {
  static async getById(id: number, fields: ProductFieldQuery): Promise<ProductField> {
    return this.getOne({ fields, filter: { productId: id } })
  }

  private static async getOne({ fields, filter }: OptionsGetProductField): Promise<ProductField> {
    const productQuery = new ProductFieldQueries(fields)
    const productFieldGetOneQuery: string = productQuery.getOneFullQuery()

    const { productFields }: ProductFieldResponse = await getClient().query(
      productFieldGetOneQuery,
      filter && { filter: { ...filter } }
    )

    return productFields
  }
}
