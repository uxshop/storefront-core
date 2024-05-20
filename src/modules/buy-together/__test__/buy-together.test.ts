import 'isomorphic-fetch'
import { BuyTogetherService } from '../BuyTogetherService'
import { BuyTogetherFields } from '../BuyTogetherTypes'

const PRODUCT_ID_FILTER = 2915865
const SELECTED_FIELDS: BuyTogetherFields[] = [
  'id',
  'name',
  'title',
  'buyButtonText',
  'productId',
  'colorId',
  'dateFrom',
  'dateTo',
  'active',
  'product',
  'productsPivot'
]

describe('Buy Together Module', () => {
  it('Should get main product by id with all fields successfully', async () => {
    const productResult = await BuyTogetherService.getByProductId(PRODUCT_ID_FILTER)
    expect(productResult.productId).toEqual(PRODUCT_ID_FILTER)
  })
  it('Should get main product by id with selected fields successfully', async () => {
    const productResult = await BuyTogetherService.getByProductId(PRODUCT_ID_FILTER)
    const productResultKeys = Object.keys(productResult)
    expect(productResultKeys).toEqual(SELECTED_FIELDS)
    expect(productResult.productId).toEqual(PRODUCT_ID_FILTER)
  })
})
