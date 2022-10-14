import { FreightRepositoryGql } from './FreightRepositoryGql'
import { FreightRepositoryJson } from './FreightRepositoryJson'
import { Freight, FreightFields, Shipping } from './FreightTypes'

const Repository = shop_ctx.mock?.freight ? FreightRepositoryJson : FreightRepositoryGql

interface ShippingInput extends Omit<Shipping, 'variationId'> {
  variationId: string
}
export class FreightService {
  static async getList(shipping: ShippingInput, fields?: FreightFields[]) {
    const result: Freight[] = await Repository.getList({
      filter: { ...shipping, variationId: Number(shipping.variationId) },
      fields: fields || null
    })
    return result
  }
}
