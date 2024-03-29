import { Brand } from '../../types/product/BrandTypes'
import { getClient } from '../../services/GraphqlService'
import { BrandQueries } from './BrandQueries'
import {
  BrandFields,
  BrandList,
  BrandListResponse,
  BrandResponse,
  OptionsGetBrand,
  OptionsGetBrandList
} from './BrandTypes'

export class BrandRepositoryGql {
  static async getList({ fields, filter }: OptionsGetBrandList): Promise<BrandList> {
    const brandQuery = new BrandQueries(fields)
    const brandListQuery: string = brandQuery.listFullQuery()
    const { brands }: BrandListResponse = await getClient().query(brandListQuery, filter && { filter: { ...filter } })

    return brands
  }

  private static async getOne({ fields, filter }: OptionsGetBrand): Promise<Brand> {
    const brandQuery = new BrandQueries(fields)
    const brandGetOneQuery: string = brandQuery.getOneFullQuery()
    const { brand }: BrandResponse = await getClient().query(brandGetOneQuery, filter && { filter: { ...filter } })

    return brand
  }

  static async getById(id: number, fields?: BrandFields[]): Promise<Brand> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: string, fields?: BrandFields[]): Promise<Brand> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
