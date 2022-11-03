export class LandingPagesQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'shopId',
      'id',
      'name',
      'content',
      'slug',
      'notIndex',
      'active',
      'url',
      'createdAt',
      'updatedAt',
      'metaTitle',
      'metaDescription',
      'metaKeywords'
    ]
  }

  getOnefullQuery() {
    return `query LandingPage($filter: filter) {
        landingPage(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
