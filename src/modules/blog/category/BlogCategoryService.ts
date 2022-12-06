import { BroadcastService } from '../../../services/broadcast/broadcast-service'
import { BlogCategoryRepositoryGql } from './BlogCategoryRepositoryGql'
import { BlogCategoryRepositoryJson } from './BlogCategoryRepositoryJson'
import { BlogCategory, BlogCategoryFields } from './BlogCategoryTypes'

const Repository = shop_ctx.mock?.blogCategory ? BlogCategoryRepositoryJson : BlogCategoryRepositoryGql

export class BlogCategoryService {
  static async getById(id: string, fields?: BlogCategoryFields[]): Promise<BlogCategory> {
    try {
      const result: BlogCategory = await Repository.getById(Number(id), fields)
      BroadcastService.emit('Blog', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: BlogCategoryFields[]): Promise<BlogCategory> {
    try {
      const result: BlogCategory = await Repository.getBySlug(slug, fields)
      BroadcastService.emit('Blog', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getList(fields?: BlogCategoryFields[]): Promise<BlogCategory[]> {
    try {
      const result: BlogCategory[] = await Repository.getList(fields)
      BroadcastService.emit('Blog', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
