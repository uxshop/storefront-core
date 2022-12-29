import { Page } from '../../types/PageTypes'
import { PagesRepositoryGql } from './PagesRepositoryGql'
import { PagesRepositoryJson } from './PagesRepositoryJson'
import { PageFields } from './PageTypes'

const Repository = () => (shop_ctx.mock?.pages || shop_ctx.mock?.page ? PagesRepositoryJson : PagesRepositoryGql)

export class PagesService {
  static async getList(fields?: PageFields[]): Promise<Page[]> {
    try {
      const result = await Repository().getList(fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getById(id: string, fields?: PageFields[]): Promise<Page> {
    try {
      const result = await Repository().getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: PageFields[]): Promise<Page> {
    try {
      const result = await Repository().getBySlug(slug, fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
