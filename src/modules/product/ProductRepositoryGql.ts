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

    const { products }: ProductListResponse = await client.query(
      productListQuery,
      filter && { agg: agg, filter: { ...filter } }
    )

    return products
  }

  private static async getOne({ fields, filter }: OptionsGetProduct): Promise<Product> {
    const productQuery = new ProductQueries(fields)
    const productGetOneQuery: string = productQuery.getOneFullQuery()

    const { product }: ProductResponse = await client.query(productGetOneQuery, filter && { filter: { ...filter } })

    return product
  }

  static async getById(id: number, fields?: Array<ProductFields>): Promise<Product> {
    return this.getOne({ fields: fields || null, filter: { productId: id } })
  }

  static async getBySlug(slug: string, fields?: Array<ProductFields>): Promise<Product> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
