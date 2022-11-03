export class CategoryQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getChildrenFields() {
    return `children {
      ${this.getFields()},
      children {
        ${this.getFields()}
      }
    }`
  }

  private getImageFields() {
    return '{src, alt}'
  }

  private defaultFields() {
    return [
      'id',
      'name',
      'slug',
      'position',
      'depth',
      'breadcrumb',
      'isActive',
      'createdAt',
      'updatedAt',
      'parentId',
      'hotsiteId',
      'externalId',
      'description',
      `image ${this.getImageFields()}`,
      `banner ${this.getImageFields()}`,
      'bannerLink',
      'googleTaxonomyId',
      'metaTitle',
      'metaKeywords',
      'metaDescription'
    ]
  }

  treeFullQuery() {
    return `query getCategoryTree {
        categoryTree {
                ${this.getFields()},
                ${this.getChildrenFields()}
          }
        }`
  }

  getOnefullQuery() {
    return `query getCategory($filter: filterCategory!){
        category(filter: $filter){
          ${this.getFields()}
        }
      }`
  }
}
