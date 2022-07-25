import { Post } from '../../../types/PostTypes'
import { BlogPostRepositoryGql } from './BlogPostRepositoryGql'
import { BlogPostRepositoryJson } from './BlogPostRepositoryJson'
import { BlogPostFields, BlogPostList, BlogPostListFilter } from './BlogPostTypes'

const Repository = dc_config.mock?.blogPost ? BlogPostRepositoryJson : BlogPostRepositoryGql

export class BlogPostService {
  static async getById(id: string, fields?: Array<BlogPostFields>): Promise<Post> {
    const result: Post = await Repository.getById(Number(id), fields)
    return result
  }

  static async getBySlug(slug: string, fields?: Array<BlogPostFields>): Promise<Post> {
    const result: Post = await Repository.getBySlug(slug, fields)
    return result
  }

  static async getList(paginationFilter: BlogPostListFilter, fields?: Array<BlogPostFields>): Promise<BlogPostList> {
    const result: BlogPostList = await Repository.getList({
      fields: fields || null,
      filter: paginationFilter || { page: 1 }
    })
    return result
  }
}
