import { getClient } from '../../services/GraphqlService'
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

    const { products }: ProductListResponse = await getClient().query(
      productListQuery,
      filter && { agg: agg, filter: { ...filter } }
    )

    return products
  }

  private static async getOne({ fields, filter }: OptionsGetProduct): Promise<Product> {
    const productQuery = new ProductQueries(fields)
    const productGetOneQuery: string = productQuery.getOneFullQuery()

    const { product }: ProductResponse = await getClient().query(
      productGetOneQuery,
      filter && { filter: { ...filter } }
    )

    return product
  }

  static async getById(id: number, fields?: ProductFields[]): Promise<Product> {
    return this.getOne({ fields: fields || null, filter: { productId: id } })
  }

  static async getBySlug(slug: string, fields?: ProductFields[]): Promise<Product> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
