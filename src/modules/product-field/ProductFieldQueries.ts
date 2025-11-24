import { convertFieldsToSchema } from '../../helpers/gqlSchemasHelpers'
import { ProductFieldQuery } from './ProductFieldTypes'

export class ProductFieldQueries {
  fields: null | ProductFieldQuery

  constructor(fields: null | ProductFieldQuery) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    const keys = Object.keys(this.fields)
    return convertFieldsToSchema(this.fields, keys).join('\n')
  }

  private defaultFields(): ProductFieldQuery {
    return { id: true }
  }

  getOneFullQuery() {
    return `query ProductFields($filter: filterProductFields!) {
      productFields(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
