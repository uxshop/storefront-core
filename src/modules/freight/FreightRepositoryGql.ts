import { client } from '../../services/GraphqlService'
import { FreightQueries } from './FreightQueries'
import { Freight, FreightResponse, OptionsGetFreight } from './FreightTypes'

export class FreightRepositoryGql {
  static async getList({ fields, filter }: OptionsGetFreight): Promise<Freight[]> {
    const freightQuery = new FreightQueries(fields)
    const getListQuery: string = freightQuery.getListFullQuery()
    try {
      const { freights }: FreightResponse = await client.query(getListQuery, filter && { shipping: { ...filter } })

      return freights
    } catch (error) {
      throw new Error(error)
    }
  }
}
