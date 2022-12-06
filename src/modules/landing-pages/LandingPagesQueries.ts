export class LandingPagesQueries {
  fields: null | string[]

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
      'content',
      'slug',
      'isIndex',
      'isActive',
      'createdAt',
      'updatedAt',
      'metaTitle',
      'metaDescription',
      'metaKeywords'
    ]
  }

  getOneFullQuery() {
    return `query LandingPage($filter: filter) {
        landingPage(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
