import { BroadcastService } from '../broadcast-service'
import brandMock from '../../../mocks/brand/brand.json'
import shopMock from '../../../mocks/shop/shop.json'

describe('Broadcast Service', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('Should emit event sendBrand', async () => {
    const spy = jest.spyOn(window, 'dispatchEvent')

    BroadcastService.sendBrand(brandMock)

    const [event] = spy.mock.calls[0]

    expect(spy).toBeCalledTimes(1)
    expect(event.type).toBe('sendBrand')
  })

  it('Should emit event sendShop', async () => {
    const spy = jest.spyOn(window, 'dispatchEvent')

    BroadcastService.sendShop(shopMock)

    const [event] = spy.mock.calls[0]

    expect(spy).toBeCalledTimes(1)
    expect(event.type).toBe('sendShop')
  })
})
