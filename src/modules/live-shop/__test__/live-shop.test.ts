import 'isomorphic-fetch'
import { LiveShop } from '../LiveShopTypes'
import { LiveShopService } from '../LiveShopService'

const HASH_FILTER = 'abc123'
const ID_FILTER = 1

describe('Live Shop Module', () => {
  it('Should get live shop by id with all fields successfully', async () => {
    const liveShop: LiveShop = await LiveShopService.getById(ID_FILTER)
    expect(liveShop.hashRoom).toEqual(HASH_FILTER)
  })

  it('Should get live shop by hash with all fields successfully', async () => {
    const liveShop: LiveShop = await LiveShopService.getByHash(HASH_FILTER)
    expect(liveShop.hashRoom).toEqual(HASH_FILTER)
  })
})
