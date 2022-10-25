import { Post } from '../../../types/PostTypes'
import { client } from '../../../services/GraphqlService'
import { BlogPostQueries } from './BlogPostQueries'
import {
  BlogPostFields,
  BlogPostList,
  BlogPostListResponse,
  BlogPostResponse,
  OptionsGetBlogPost,
  OptionsGetBlogPostList
} from './BlogPostTypes'

export class BlogPostRepositoryGql {
  static async getList({ fields, filter }: OptionsGetBlogPostList): Promise<BlogPostList> {
    const blogPostQuery = new BlogPostQueries(fields)
    const blogPostListQuery: string = blogPostQuery.listFullQuery()
    try {
      const { blogPosts }: BlogPostListResponse = await client.query(
        blogPostListQuery,
        filter && { filter: { ...filter } }
      )

      return blogPosts
    } catch (error) {
      throw new Error(error)
    }
  }

  private static async getBlogPost({ fields, filter }: OptionsGetBlogPost): Promise<Post> {
    const blogPostQuery = new BlogPostQueries(fields)
    const blogPostGetOneQuery: string = blogPostQuery.getOnefullQuery()
    try {
      const { blogPost }: BlogPostResponse = await client.query(
        blogPostGetOneQuery,
        filter && { filter: { ...filter } }
      )

      return blogPost
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: number, fields?: Array<BlogPostFields>): Promise<Post> {
    return this.getBlogPost({ filter: { id: id }, fields: fields })
  }

  static async getBySlug(slug: string, fields?: BlogPostFields[]): Promise<Post> {
    return this.getBlogPost({ filter: { slug: slug }, fields: fields })
  }
}
