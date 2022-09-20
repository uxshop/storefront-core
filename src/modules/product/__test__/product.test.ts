import { ProductFields } from '../ProductTypes'
import { ProductService } from '../ProductService'
import { Pagination } from '../../../types/PaginationTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<ProductFields> = ['id', 'slug']

describe('Product Module', () => {
  it('Should get product by id with all fields successfully', async () => {
    const FILTER_ID = '2913645'
    const productResult = await ProductService.getById(FILTER_ID)
    expect(productResult.product_id.toString()).toEqual(FILTER_ID)
    expect(productResult.name).toEqual('Teste Novo')
  })

  it('Should get product by id with selected fields successfully', async () => {
    const FILTER_ID = '2913645'
    const productResult = await ProductService.getById(FILTER_ID, [...SELECTED_FIELDS])
    const productResultFields = Object.keys(productResult).filter(key => key != '__typename')
    expect(productResultFields).toEqual(SELECTED_FIELDS)
    expect(productResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get product by slug with all fields successfully', async () => {
    const FILTER_SLUG = 'teste-novo'
    const productResult = await ProductService.getBySlug(FILTER_SLUG)
    expect(productResult.slug).toEqual(FILTER_SLUG)
    expect(productResult.name).toEqual('Teste Novo')
  })

  it('Should get product list with all fields successfully', async () => {
    const FILTER_PAGINATION: Pagination = { page: 1, items: 1 }
    const productResult = await ProductService.getList(FILTER_PAGINATION)
    expect(productResult.edges.length).toEqual(1)
  })

  it('Should try to get product by inexistent id and it should throw error', async () => {
    const FILTER_ID = '6'
    expect(async () => await ProductService.getById(FILTER_ID)).rejects.toThrow()
  })
})
