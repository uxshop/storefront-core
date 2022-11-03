export class SectionsQueries {
  fields: null | Array<string>

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['data', 'page', 'version', 'themeId']
  }

  getOnefullQuery() {
    return `query getSections($filter: filterSection){
        section(filter: $filter){
          ${this.getFields()}
        }
      }`
  }
}
