import { normalizePagination } from '../../../helpers/PaginationHelper'
import { BlogPostRepositoryGql } from './BlogPostRepositoryGql'
import { BlogPostRepositoryJson } from './BlogPostRepositoryJson'
import { Post } from '../../../types/PostTypes'
import { BlogPostFields, BlogPostList, BlogPostListFilter } from './BlogPostTypes'

const Repository = () => (shop_ctx.mock?.blogPost ? BlogPostRepositoryJson : BlogPostRepositoryGql)

export class BlogPostService {
  static async getById(id: string, fields?: BlogPostFields[]): Promise<Post> {
    try {
      const result: Post = await Repository().getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getBySlug(slug: string, fields?: BlogPostFields[]): Promise<Post> {
    try {
      const result = await Repository().getBySlug(slug, fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getList(
    { page, first = 6, fastSearch, postCategoryId }: BlogPostListFilter,
    fields?: BlogPostFields[]
  ): Promise<BlogPostList> {
    try {
      const result: BlogPostList = await Repository().getList({
        filter: {
          ...normalizePagination(page, first),
          fastSearch,
          postCategoryId
        },
        fields: fields
      })
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
