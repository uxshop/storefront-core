import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { FreightRepositoryGql } from './FreightRepositoryGql'
import { FreightRepositoryJson } from './FreightRepositoryJson'
import { Freight, FreightFields, Shipping } from './FreightTypes'

const Repository = shop_ctx.mock?.freight ? FreightRepositoryJson : FreightRepositoryGql

interface ShippingInput extends Omit<Shipping, 'variationId'> {
  variationId: string
}
export class FreightService {
  static async getList(shipping: ShippingInput, fields?: FreightFields[]) {
    try {
      const result: Freight[] = await Repository.getList({
        filter: { ...shipping, variationId: Number(shipping.variationId) },
        fields: fields || null
      })

      BroadcastService.emit('Freight', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
