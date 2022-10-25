import { Post } from 'src/types/PostTypes'
import { BlogPostFields, OptionsGetBlogPostList } from './BlogPostTypes'

export class BlogPostRepositoryJson {
  static async getList({ fields, filter }: OptionsGetBlogPostList) {
    const result = shop_ctx.mock?.blogPost
    return result || {}
  }

  static async getById(id: number, fields?: BlogPostFields[]) {
    const blogPostList = shop_ctx.mock?.blogPost?.edges
    const blogPost = blogPostList && blogPostList.find(blogPost => blogPost.id == id)
    if (!blogPost) {
      throw new Error('blog-post_not_found')
    }

    const result = { ...blogPost }
    result && this.applyFieldFilters(result, fields)
    return result || {}
  }

  static async getBySlug(slug: string, fields?: BlogPostFields[]) {
    const blogPostList = shop_ctx.mock?.blogPost?.edges
    const blogPost = blogPostList && blogPostList.find(blogPost => blogPost.slug == slug)
    if (!blogPost) {
      throw new Error('blog-post_not_found')
    }

    const result = { ...blogPost }
    result && this.applyFieldFilters(result, fields)
    return result || {}
  }

  private static applyFieldFilters(result: Post, fields?: BlogPostFields[]) {
    const isFIeldNotSelected = entry => !fields.includes(entry)

    const deleteFieldIfNecessary = entry => {
      isFIeldNotSelected(entry) && delete result[entry]
    }

    fields && Object.keys(result).forEach(deleteFieldIfNecessary)
  }
}
