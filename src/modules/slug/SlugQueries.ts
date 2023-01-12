export class SlugQueries {
  fields: null | string[]

  constructor() {
    this.fields = this.defaultFields()
  }

  private defaultFields() {
    return ['slug', 'source', 'data']
  }

  private getFields() {
    return this.fields.join()
  }

  getOneFullQuery() {
    return `query Slug($filter: SlugFilter) {
        slug(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
