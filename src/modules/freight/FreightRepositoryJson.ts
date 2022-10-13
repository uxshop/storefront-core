import { Freight, OptionsGetFreight } from './FreightTypes'

export class FreightRepositoryJson {
  static async getList({ fields, filter }: OptionsGetFreight): Promise<Freight[]> {
    if (filter.variationId === 111) throw new Error()
    const mock = shop_ctx.mock?.freight

    const result = fields
      ? mock.map(freight => {
          const formattedFreight = {}
          fields.forEach(field => (formattedFreight[field] = freight[field]))
          return formattedFreight
        })
      : mock

    return result || []
  }
}
