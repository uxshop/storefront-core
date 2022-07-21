import { CategoryFields, CategoryTreeFields } from './CategoryTypes'

export class CategoryRepositoryJson {
  static async getById(id: Number, fields?: Array<CategoryFields>) {
    const categories = process.env.DC_CONFIG.mock?.category
    const result = categories && categories.filter(category => category.id == id)
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<CategoryFields>) {
    const categories = process.env.DC_CONFIG.mock?.category
    const result = categories && categories.filter(category => category.slug == slug)
    return result || {}
  }

  static async getTreeById(id: Number, fields?: Array<CategoryTreeFields>) {
    const categoryTrees = process.env.DC_CONFIG.mock?.categoryTree
    const result = categoryTrees && categoryTrees.filter(categoryTree => categoryTree.id == id)
    return result || {}
  }

  static async getTreeBySlug(slug: String, fields?: Array<CategoryTreeFields>) {
    const categoryTrees = process.env.DC_CONFIG.mock?.categoryTree
    const result = categoryTrees && categoryTrees.filter(categoryTree => categoryTree.slug == slug)
    return result || {}
  }
}
