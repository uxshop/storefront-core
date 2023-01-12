import { SlugService } from '../SlugService'
import 'isomorphic-fetch'

describe('Slug Module', () => {
  it('should return a slug', async () => {
    const SLUG_FILTER = 'konga'
    const slugResult = await SlugService.getOne({ slug: SLUG_FILTER })

    expect(slugResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should return a not found error', async () => {
    expect(async () => await SlugService.getOne({ slug: 'Lupisvaldo' })).rejects.toThrow()
  })
})
