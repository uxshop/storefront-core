export class SectionsQueries {
  fields: null | string[]

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['data', 'page', 'version', 'themeId']
  }

  getOneFullQuery() {
    return `query getSections($filter: filterSection){
        section(filter: $filter){
          ${this.getFields()}
        }
      }`
  }
}
