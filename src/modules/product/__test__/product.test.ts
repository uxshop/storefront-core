import { ProductFields } from '../ProductTypes'
import { ProductService } from '../ProductService'
import { Pagination } from '../../../types/PaginationTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<ProductFields> = ['id', 'slug']

describe('Product Module', () => {
  it('Should get showcase by id with all fields successfully', async () => {
    const FILTER_ID = '2913676'
    const productResult = await ProductService.getById(FILTER_ID)
    expect(productResult.id).toEqual(FILTER_ID.toString())
    expect(productResult.name).toEqual('Pizza boa')
  })

  it('Should get showcase by id with selected fields successfully', async () => {
    const FILTER_ID = '2913676'
    const showcaseResult = await ProductService.getById(FILTER_ID, [...SELECTED_FIELDS])
    const showcaseResultFields = Object.keys(showcaseResult).filter(key => key != '__typename')
    expect(showcaseResultFields).toEqual(SELECTED_FIELDS)
    expect(showcaseResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get showcase by slug with all fields successfully', async () => {
    const FILTER_SLUG = 'tenis-asics-gel-rocket-10'
    const showcaseResult = await ProductService.getBySlug(FILTER_SLUG)
    expect(showcaseResult.slug).toEqual(FILTER_SLUG)
    expect(showcaseResult.name).toEqual('TÊNIS ASICS GEL-ROCKET 10')
  })

  it('Should get showcase list by category slug with all fields successfully', async () => {
    const FILTER_PAGINATION: Pagination = { page: 1, items: 1 }
    const showcaseResult = await ProductService.getListByCategorySlug('tenis', FILTER_PAGINATION)
    expect(showcaseResult.edges.length).toEqual(1)
  })

  it('Should get showcase list by category slug with all fields successfully', async () => {
    const FILTER_PAGINATION: Pagination = { page: 1, items: 1 }
    const showcaseResult = await ProductService.getListByCategorySlug('tenis', FILTER_PAGINATION)
    expect(showcaseResult.edges.length).toEqual(1)
  })

  it('Should try to get showcase by inexistent id and it should throw error', async () => {
    const FILTER_ID = '6'
    expect(async () => await ProductService.getById(FILTER_ID)).rejects.toThrow()
  })
})
