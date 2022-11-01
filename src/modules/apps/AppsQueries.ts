export class AppsQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['id', 'slug', 'price', 'shopId', 'storeAppId', 'content', 'userId', 'bridgePackageId']
  }

  getApps() {
    return `query Apps($filter: filterApps) {
        apps(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
