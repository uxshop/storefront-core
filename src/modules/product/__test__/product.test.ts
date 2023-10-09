import { ProductFields } from '../ProductTypes'
import { ProductService } from '../ProductService'
import { Pagination } from '../../../types/PaginationTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: ProductFields[] = ['id', 'slug']
const PRODUCT_ID_FILTER = '2915659'
describe('Product Module', () => {
  it('Should get product by id with all fields successfully', async () => {
    const productResult = await ProductService.getById(PRODUCT_ID_FILTER)
    expect(productResult.productId?.toString()).toEqual(PRODUCT_ID_FILTER)
  })

  it('Should get product by id with selected fields successfully', async () => {
    const productResult = await ProductService.getById(PRODUCT_ID_FILTER, [...SELECTED_FIELDS])
    const productResultFields = Object.keys(productResult)
    expect(productResultFields).toEqual(SELECTED_FIELDS)
    expect(productResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get product by slug with all fields successfully', async () => {
    const SLUG_FILTER = 'tenis-nike-air-max'
    const productResult = await ProductService.getBySlug(SLUG_FILTER)
    expect(productResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get product list with all fields successfully', async () => {
    const PAGINATION_FILTER: Pagination = { page: 1, items: 1 }
    const productResult = await ProductService.getList({ filter: PAGINATION_FILTER })
    expect(productResult.edges.length).toEqual(1)
  })

  it('Should try to get product by inexistent id and it should throw error', async () => {
    const ID_FILTER = '6'
    expect(async () => await ProductService.getById(ID_FILTER)).rejects.toThrow()
  })
})
