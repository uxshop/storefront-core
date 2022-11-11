export class AppQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['id', 'slug', 'storeAppId', 'content']
  }

  getApp() {
    return `query App($filter: filterApps) {
        app(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
