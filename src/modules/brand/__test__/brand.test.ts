import { BrandService } from '../BrandService'
import { BrandFields } from '../BrandTypes'
import 'isomorphic-fetch'

const ID_FILTER = '136533'

describe('Brand Module', () => {
  it('Should get brand by id with all fields successfully', async () => {
    const brandResult = await BrandService.getById(ID_FILTER)
    expect(brandResult.id).toEqual(ID_FILTER.toString())
  })

  it('Should get brand by id with selected fields successfully', async () => {
    const SELECTED_FIELDS: BrandFields[] = ['id', 'name', 'slug']
    const brandResult = await BrandService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const brandResultFields = Object.keys(brandResult).filter(key => key != '__typename')

    expect(brandResultFields).toEqual(SELECTED_FIELDS)
  })

  it('Should get brand by slug with all fields successfully', async () => {
    const FILTER_SLUG = 'nike'
    const brandResult = await BrandService.getBySlug(FILTER_SLUG)

    expect(brandResult.slug).toEqual(FILTER_SLUG)
  })

  it('Should get brand list with all fields successfully', async () => {
    const PAGINATION_FILTER = { page: 1, first: 1 }

    const brandListResult = await BrandService.getList(PAGINATION_FILTER)

    expect(brandListResult.edges.length > 0).toBeTruthy()
  })

  it('Should try get brand by inexistent id and it should returns error', async () => {
    expect(async () => await BrandService.getById('1234')).rejects.toThrowError()
  })
})
