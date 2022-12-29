import { getClient } from '../../../services/GraphqlService'
import {
  BlogCategory,
  BlogCategoryFields,
  BlogCategoryListResponse,
  BlogCategoryResponse,
  OptionsGetBlogCategory
} from './BlogCategoryTypes'

import { BlogCategoryQueries } from './BlogCategoryQueries'

export class BlogCategoryRepositoryGql {
  static async getList(fields?: BlogCategoryFields[]): Promise<BlogCategory[]> {
    const blogCategoryQuery = new BlogCategoryQueries(fields)
    const blogCategoryListQuery: string = blogCategoryQuery.listFullQuery()
    const { blogCategories }: BlogCategoryListResponse = await getClient().query(blogCategoryListQuery)

    return blogCategories
  }

  private static async getOne(OptionsGetBlogCategory: OptionsGetBlogCategory): Promise<BlogCategory> {
    const { fields, filter } = OptionsGetBlogCategory

    const blogCategoryQuery = new BlogCategoryQueries(fields)
    const blogCategoryGetOneQuery: string = blogCategoryQuery.getOnefullQuery()
    const { blogCategory }: BlogCategoryResponse = await getClient().query(
      blogCategoryGetOneQuery,
      filter && { filter: { ...filter } }
    )

    return blogCategory
  }

  static async getById(id: number, fields?: BlogCategoryFields[]): Promise<BlogCategory> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: string, fields?: BlogCategoryFields[]): Promise<BlogCategory> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
