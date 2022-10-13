import { FreightRepositoryGql } from './FreightRepositoryGql'
import { FreightRepositoryJson } from './FreightRepositoryJson'
import { Freight, FreightFields, Shipping } from './FreightTypes'

const Repository = shop_ctx.mock?.freight ? FreightRepositoryJson : FreightRepositoryGql

export class FreightService {
  static async getList(shipping: Shipping, fields?: FreightFields[]) {
    const result: Freight[] = await Repository.getList({ filter: shipping, fields: fields || null })
    return result
  }
}
