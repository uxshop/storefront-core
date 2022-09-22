import { CategoryRepositoryGql } from './CategoryRepositoryGql'
import { CategoryRepositoryJson } from './CategoryRepositoryJson'
import { Category, CategoryFields, CategoryTree, CategoryTreeFields } from './CategoryTypes'

const Repository =
  shop_ctx.mock?.category && shop_ctx.mock?.categoryTree ? CategoryRepositoryJson : CategoryRepositoryGql

export class CategoryService {
  static async getById(id: string, fields?: Array<CategoryFields>) {
    const result: Category = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<CategoryFields>) {
    const result: Category = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getTree(fields?: Array<CategoryTreeFields>) {
    const result: Array<CategoryTree> = await Repository.getTree(fields)
    return result
  }
}
