import { BlogCategory, BlogCategoryFields } from './BlogCategoryTypes'

export class BlogCategoryRepositoryJson {
  static async getList(fields?: BlogCategoryFields[]) {
    return [...shop_ctx.mock?.blogCategory] || []
  }

  static async getById(id: number, fields?: BlogCategoryFields[]) {
    const blogCategories = [...shop_ctx.mock?.blogCategory]
    const blogCategory = blogCategories && blogCategories.find(blogCategory => blogCategory.id == id)

    if (!blogCategory) {
      throw new Error('blog-category_not_found')
    }

    const result = { ...blogCategory }

    result && this.applyFieldFilters(result, fields)

    return result || {}
  }

  static async getBySlug(slug: string, fields?: BlogCategoryFields[]) {
    const blogCategories = [...shop_ctx.mock?.blogCategory]
    const blogCategory = blogCategories && blogCategories.find(blogCategory => blogCategory.slug == slug)

    if (!blogCategory) {
      throw new Error('blog-category_not_found')
    }

    const result = { ...blogCategory }

    result && this.applyFieldFilters(result, fields)

    return result || {}
  }

  private static applyFieldFilters(result: BlogCategory, fields?: BlogCategoryFields[]) {
    const isFIeldNotSelected = entry => !fields.includes(entry)

    const deleteFieldIfNecessary = entry => {
      isFIeldNotSelected(entry) && delete result[entry]
    }

    fields && Object.keys(result).forEach(deleteFieldIfNecessary)
  }
}
