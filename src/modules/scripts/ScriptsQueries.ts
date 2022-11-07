export class ScriptsQueries {
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
      'position',
      'name',
      'location',
      'page',
      'loadMethod',
      'content',
      'category',
      'isActive',
      'description',
      'url'
    ]
  }

  listFullQuery() {
    return `query Scripts($filter: filterScript) {
        scripts(filter: $filter) {
            ${this.getFields()}
          }
        }`
  }
}
