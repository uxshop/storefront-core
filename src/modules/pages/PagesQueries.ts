export class PagesQueries {
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
      'template',
      'url',
      'active',
      'faq {active, answer, question}',
      'createdAt',
      'updatedAt',
      'description',
      'metaTitle',
      'metaDescription',
      'metaKeywords'
    ]
  }

  listFullQuery() {
    return `query getPages {
        pages {
            ${this.getFields()}
        }
      }`
  }

  getOnefullQuery() {
    return `query Page($filter: filterPage) {
      page(filter: $filter) {
            ${this.getFields()}
        }
      }`
  }
}
