export class MenuQueries {
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

  private getChildrenFields() {
    return [
      'id',
      'menuId',
      'brandId',
      'name',
      'menuType',
      'slug',
      'menuTypeSlug',
      'active',
      'createdAt',
      `image ${this.getImageFields()}`,
      'parentId',
      'pageId',
      'hotsiteId',
      'categoryId',
      'banner',
      'bannerLink',
      'isFeatured',
      'link',
      'menuTypeLink',
      'updatedAt',
      'position'
    ]
  }

  private defaultFields() {
    return [
      'id',
      'name',
      'handle',
      'createdAt',
      'updatedAt',
      `values {
        id, 
        menuId, 
        brandId,
        name,
        menuType,
        slug, 
        menuTypeSlug, 
        active, 
        createdAt, 
        image ${this.getImageFields()},
        parentId, 
        pageId, 
        hotsiteId,
        categoryId,
        banner,
        bannerLink,
        isFeatured,
        link,
        menuTypeLink,
        updatedAt,
        position,
        children {
           ${this.getChildrenFields().join()},
           children {
            ${this.getChildrenFields().join()},
           }
        }
      }`
    ]
  }

  listFullQuery() {
    return `query getMenus {
        menus {
            ${this.getFields()}
        }
      }`
  }

  getOnefullQuery() {
    return `query getMenu($filter: filterMenu){
        menu(filter: $filter){
          ${this.getFields()}
        }
      }`
  }
}
