import { Page } from '../../types/PageTypes'
import { PagesRepositoryGql } from './PagesRepositoryGql'
import { PagesRepositoryJson } from './PagesRepositoryJson'
import { PageFields } from './PageTypes'

const Repository = shop.mock?.pages || shop.mock?.page ? PagesRepositoryJson : PagesRepositoryGql

export class PagesService {
  static async getList(fields?: Array<PageFields>): Promise<Array<Page>> {
    const result: Array<Page> = await Repository.getList(fields)
    return result
  }

  static async getById(id: string, fields?: Array<PageFields>): Promise<Page> {
    const result: Page = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<PageFields>): Promise<Page> {
    const result: Page = await Repository.getBySlug(slug, fields)
    return result
  }
}
