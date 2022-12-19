export class SidebarQueries {
  fields: null | string[]

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['filtered {type, id, name}', 'filters {type, name, items {id, name, position}}']
  }

  getQuery() {
    return `query SidebarFilters($filters: [filterSidebar]) {
        sidebarFilters(filters: $filters) {
            ${this.getFields()}
          }
        }`
  }
}
