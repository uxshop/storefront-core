export class SidebarQueries {
  fields: null | Array<string>

  constructor() {
    this.fields = this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return ['filtered {type, id, name}', 'filters {type, description, items {id, name, position}}']
  }

  getQuery() {
    return `query Query($filters: [filterSidebar]) {
        sidebarFilters(filters: $filters) {
            ${this.getFields()}
          }
        }`
  }
}
