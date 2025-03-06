export class LiveShopQueries {
  fields: null | string[]

  constructor(fields: string[]) {
    this.fields = fields || this.defaultFields()
  }

  private getImageFields() {
    return '{alt, src}'
  }

  private getMessageFields() {
    return '{id, title, content, status, position}'
  }

  private getDiscountFields() {
    return '{type, value}'
  }

  private getVariationFields() {
    return `
      {
        variationId, 
        discount ${this.getDiscountFields()}
      }`
  }

  private getProductFields() {
    return `
      {
        productId, 
        discount ${this.getDiscountFields()}, 
        variations ${this.getVariationFields()},
        status
        position
      }`
  }

  defaultFields() {
    return [
      'id',
      'name',
      'hashRoom',
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
