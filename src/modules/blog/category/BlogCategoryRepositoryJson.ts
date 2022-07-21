import { BlogCategoryFields } from './BlogCategoryTypes'

export class BlogCategoryRepositoryJson {
  static async getList(fields?: Array<BlogCategoryFields>) {
    const result = process.env.DC_CONFIG.mock?.blogCategory
    return result || {}
  }

  static async getById(id: Number, fields?: Array<BlogCategoryFields>) {
    const blogCategories = process.env.DC_CONFIG.mock?.blogCategory
    const result = blogCategories && blogCategories.filter(blogCategory => blogCategory.id == id)[0]
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<BlogCategoryFields>) {
    const blogCategories = process.env.DC_CONFIG.mock?.blogCategory
    const result = blogCategories && blogCategories.filter(blogCategory => blogCategory.slug == slug)[0]
    return result || {}
  }
}
