import 'isomorphic-fetch'
import { BuyTogetherService } from '../BuyTogetherService'

const PRODUCT_ID_FILTER = 2915659

describe('Buy Together Module', () => {
  it('Should get main product by id with all fields successfully', async () => {
    const productResult = await BuyTogetherService.getByProductId(PRODUCT_ID_FILTER)
    expect(productResult.productId).toEqual(PRODUCT_ID_FILTER)
  })
})
