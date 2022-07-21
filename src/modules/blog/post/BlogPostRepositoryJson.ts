import { BlogPostFields, OptionsGetBlogPostList } from './BlogPostTypes'

export class BlogPostRepositoryJson {
  static async getList({ fields, filter }: OptionsGetBlogPostList) {
    const result = process.env.DC_CONFIG.mock?.blogPost
    return result || {}
  }

  static async getById(id: Number, fields?: Array<BlogPostFields>) {
    const blogPostList = process.env.DC_CONFIG.mock?.blogPost
    const result = blogPostList && blogPostList.filter(blogPost => blogPost.id == id)[0]
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<BlogPostFields>) {
    const blogPostList = process.env.DC_CONFIG.mock?.blogPost
    const result = blogPostList && blogPostList.filter(blogPost => blogPost.slug == slug)[0]
    return result || {}
  }
}
