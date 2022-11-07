export class BlogCategoryQueries {
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
      'name',
      'slug',
      'description',
      'metaTitle',
      'metaDescription',
      'isActive',
      'postsCount',
      'position',
      'createdAt',
      'updatedAt'
    ]
  }

  getOnefullQuery() {
    return `query BlogCategory($filter: filterBlogCategory) {
        blogCategory(filter: $filter) {
                ${this.getFields()}
            }
        }`
  }

  listFullQuery() {
    return `query BlogCategories {
        blogCategories {
          ${this.getFields()}
            }
        }`
  }
}
