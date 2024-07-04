export class LiveShopQueries {
  fields: null | string[]

  constructor(fields: string[]) {
    this.fields = fields || this.defaultFields()
  }

  private getImageFields() {
    return '{alt, src}'
  }

  private getMessageFields() {
    return '{title, content}'
  }

  private getDiscountFields() {
    return '{type, value}'
  }

  private getVariationFields() {
    return `
      {
        id, 
        discount ${this.getDiscountFields()}
      }`
  }

  private getProductFields() {
    return `
      {
        id, 
        discount ${this.getDiscountFields()}, 
        variations ${this.getVariationFields()}
      }`
  }

  defaultFields() {
    return [
      'id',
      'name',
      'status',
      'urlLive',
      'title',
      `banner ${this.getImageFields()}`,
      `messages ${this.getMessageFields()}`,
      `products ${this.getProductFields()}`,
      'alertVisible',
      'chatVisible',
      'isActive',
      'createdAt',
      'updatedAt'
    ]
  }

  getFields() {
    return this.fields.join()
  }

  getOneFullQuery() {
    return `
    query LiveShop($filter: FilterLiveShop){
      liveShop(filter: $filter){
        ${this.getFields()}
      }
    }`
  }
}
