export class BlogPostQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'id',
      'postCategoryId',
      'name',
      'slug',
      'image {src, alt}',
      'description',
      'tags',
      'active',
      'url',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'createdAt',
      'updatedAt',
      `category {
            id,
            name,
            slug,
            description,
            metaTitle,
            metaDescription,
            active,
            postsCount,
            position,
            url,
            createdAt,
            updatedAt
        }`
    ]
  }

  listFullQuery() {
    return `query BlogPosts($filter: filterBlogPosts) {
        blogPosts(filter: $filter) {
            edges {
              node {
                ${this.getFields()}
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
              first
              total
            }
          }
        }`
  }

  getOnefullQuery() {
    return `query BlogPost($filter: filterBlogPost) {
        blogPost(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
