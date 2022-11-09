import { Brand } from '../../types/product/BrandTypes'
import { PaginationFilter } from '../../types/PaginationTypes'
import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { BrandRepositoryGql } from './BrandRepositoryGql'
import { BrandRepositoryJson } from './BrandRepositoryJson'
import { BrandFields, BrandList } from './BrandTypes'

const Repository = shop_ctx.mock?.brand ? BrandRepositoryJson : BrandRepositoryGql

export class BrandService {
  static async getList(paginationFilter: PaginationFilter, fields?: BrandFields[]): Promise<BrandList> {
    try {
      const result = await Repository.getList({
        fields: fields || null,
        filter: paginationFilter || { page: 1 }
      })

      BroadcastService.emmit('Brand', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getById(id: string, fields?: BrandFields[]): Promise<Brand> {
    try {
      const result = await Repository.getById(Number(id), fields)
      BroadcastService.emmit('Brand', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: BrandFields[]): Promise<Brand> {
    try {
      const result = await Repository.getBySlug(slug, fields)
      BroadcastService.emmit('Brand', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
