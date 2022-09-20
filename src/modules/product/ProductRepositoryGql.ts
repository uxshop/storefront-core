import { client } from '../../services/GraphqlService'
import { ProductQueries } from './ProductQueries'
import {
  OptionsGetProduct,
  OptionsGetProductList,
  Product,
  ProductFields,
  ProductList,
  ProductListResponse,
  ProductResponse
} from './ProductTypes'

export class ProductRepositoryGql {
  static async getList({ fields, agg, filter }: OptionsGetProductList): Promise<ProductList> {
    const productQuery = new ProductQueries(fields)
    const productListQuery: string = productQuery.listFullQuery()

    try {
      const { products }: ProductListResponse = await client.query(
        productListQuery,
        filter && { agg: agg, filter: { ...filter } }
      )

      return products
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getOne({ fields, filter }: OptionsGetProduct): Promise<Product> {
    const productQuery = new ProductQueries(fields)
    const productGetOneQuery: string = productQuery.getOnefullQuery()

    try {
      const { product }: ProductResponse = await client.query(productGetOneQuery, filter && { filter: { ...filter } })

      return product
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: number, fields?: Array<ProductFields>): Promise<Product> {
    return this.getOne({ fields: fields || null, filter: { productId: id } })
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>): Promise<Product> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
