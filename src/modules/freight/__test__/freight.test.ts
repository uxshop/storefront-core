import { FreightService } from '../FreightService'
import { FreightFields } from '../FreightTypes'
import 'isomorphic-fetch'

const SHIPPING_FILTER = {
  variationId: 9468973,
  zipCode: '93037190'
}

describe('Freight Module', () => {
  it('Should get freight with all fields succeffully', async () => {
    const freightResult = await FreightService.getList(SHIPPING_FILTER)
    expect(freightResult[0].id).toEqual('138')
  })

  it('Should get freight with selected fields succeffully', async () => {
    const SELECTED_FIELDS: FreightFields[] = ['id', 'name']
    const freightResult = await FreightService.getList(SHIPPING_FILTER, [...SELECTED_FIELDS])
    const freightResultKeys = Object.keys(freightResult[0]).filter(key => key != '__typename')
    expect(freightResultKeys).toEqual(SELECTED_FIELDS)
    expect(freightResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should try to get freight by inexistent variation_id and it should throw error', async () => {
    expect(async () => await FreightService.getList({ ...SHIPPING_FILTER, variationId: 111 })).rejects.toThrow()
  })
})
