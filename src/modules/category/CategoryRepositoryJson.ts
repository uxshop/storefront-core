import { CategoryFields, CategoryTreeFields } from './CategoryTypes'

export class CategoryRepositoryJson {
  static async getById(id: number, fields?: Array<CategoryFields>) {
    const categories = shop_ctx.mock?.category
    const result = categories && categories.filter(category => category.id == id)
    return result || {}
  }

  static async getBySlug(slug: string, fields?: Array<CategoryFields>) {
    const categories = shop_ctx.mock?.category
    const result = categories && categories.filter(category => category.slug == slug)
    return result || {}
  }

  static async getTreeById(id: number, fields?: Array<CategoryTreeFields>) {
    const categoryTrees = shop_ctx.mock?.categoryTree
    const result = categoryTrees && categoryTrees.filter(categoryTree => categoryTree.id == id)
    return result || {}
  }

  static async getTreeBySlug(slug: string, fields?: Array<CategoryTreeFields>) {
    const categoryTrees = shop_ctx.mock?.categoryTree
    const result = categoryTrees && categoryTrees.filter(categoryTree => categoryTree.slug == slug)
    return result || {}
  }
}
