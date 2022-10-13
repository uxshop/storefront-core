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
      'price_cost',
      'additional_message',
      'insurance',
      'insurance_price',
      'shipment_time',
      'delivery_time',
      'has_lower_price'
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
