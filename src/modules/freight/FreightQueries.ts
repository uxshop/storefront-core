export class FreightQueries {
  fields: null | string[]

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'id',
      'name',
      'alias',
      'api',
      'image',
      'price',
      'priceCost',
      'additionalMessage',
      'insurance',
      'insurancePrice',
      'shipmentTime',
      'deliveryTime',
      'hasLowerPrice'
    ]
  }

  getListFullQuery() {
    return `query Freights($shipping: Shipping) {
          freights(shipping: $shipping) {
            ${this.getFields()}
          }
        }`
  }
}
