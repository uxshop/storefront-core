import { Brand } from '../../types/product/BrandTypes'
import { PaginationFilter } from '../../types/PaginationTypes'
import { BrandRepositoryGql } from './BrandRepositoryGql'
import { BrandRepositoryJson } from './BrandRepositoryJson'
import { BrandFields, BrandList } from './BrandTypes'
import { ErrorResponse } from 'src/types/HelpersTypes'

const Repository = shop_ctx.mock?.brand ? BrandRepositoryJson : BrandRepositoryGql

export class BrandService {
  static async getList(paginationFilter: PaginationFilter, fields?: BrandFields[]): Promise<BrandList> {
    try {
      const result: BrandList = await Repository.getList({
        fields: fields || null,
        filter: paginationFilter || { page: 1 }
      })
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getById(id: string, fields?: BrandFields[]): Promise<Brand> {
    try {
      const result: Brand = await Repository.getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: BrandFields[]): Promise<Brand> {
    try {
      const result: Brand = await Repository.getBySlug(slug, fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
