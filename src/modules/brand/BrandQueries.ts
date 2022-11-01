export class BrandQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getImageFields() {
    return '{alt, src}'
  }

  private defaultFields() {
    return [
      'id',
      'hotsiteId',
      'externalId',
      'name',
      'slug',
      'description',
      'shortDescription',
      `image ${this.getImageFields()}`,
      `banner ${this.getImageFields()}`,
      'metaTitle',
      'metaKeywords',
      'metaDescription',
      'position',
      'url',
      'active',
      'createdAt',
      'updatedAt'
    ]
  }

  listFullQuery() {
    return `query getBrands($filter: filterPaginationBrand) {
        brands(filter: $filter) {
          edges {
            node {
              ${this.getFields()}
            }
            cursor
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
            first
            total
          }
        }
      }`
  }

  getOnefullQuery() {
    return `query getBrand($filter: filterBrand){
      brand(filter: $filter){
        ${this.getFields()}
      }
    }`
  }
}
