export class SettingsQueries {
  fields: null | Array<string>

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['shopId', 'themeId', 'version', 'page', 'data']
  }

  getOnefullQuery() {
    return `query Setting($filter: filterSetting) {
        setting(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
