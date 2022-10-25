import { BlogCategoryRepositoryGql } from './BlogCategoryRepositoryGql'
import { BlogCategoryRepositoryJson } from './BlogCategoryRepositoryJson'
import { BlogCategory, BlogCategoryFields } from './BlogCategoryTypes'

const Repository = shop_ctx.mock?.blogCategory ? BlogCategoryRepositoryJson : BlogCategoryRepositoryGql

export class BlogCategoryService {
  static async getById(id: string, fields?: BlogCategoryFields[]): Promise<BlogCategory> {
    const result: BlogCategory = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: BlogCategoryFields[]): Promise<BlogCategory> {
    const result: BlogCategory = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getList(fields?: BlogCategoryFields[]): Promise<BlogCategory[]> {
    const result: BlogCategory[] = await Repository.getList(fields)
    return result
  }
}
