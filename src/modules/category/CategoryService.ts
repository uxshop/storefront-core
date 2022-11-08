import { CategoryRepositoryGql } from './CategoryRepositoryGql'
import { CategoryRepositoryJson } from './CategoryRepositoryJson'
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from './CategoryTypes'

const Repository =
  shop_ctx.mock?.category && shop_ctx.mock?.categoryTree ? CategoryRepositoryJson : CategoryRepositoryGql

export class CategoryService {
  static async getById(id: string, fields?: CategoryFields[]): Promise<Category> {
    try {
      const result = await Repository.getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: CategoryFields[]): Promise<Category> {
    try {
      const result: Category = await Repository.getBySlug(slug, fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getTree(fields?: CategoryTreeFields[]): Promise<CategoryTree[]> {
    try {
      const result = await Repository.getTree(fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
