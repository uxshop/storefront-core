import { LandingPagesService } from '../LandingPagesService'
import { LandingPage, LandingPageFields } from '../LandingPagesTypes'
import 'isomorphic-fetch'

const ID_FILTER = '2794'
describe('Landing Pages Module', () => {
  it('Should get landing page by id with all fields successfully', async () => {
    const landingPageResult: LandingPage<any> = await LandingPagesService.getById(ID_FILTER)
    expect(landingPageResult.id).toEqual(ID_FILTER.toString())
  })

  it('Should get landing page by id with selected fields successfully', async () => {
    const SELECTED_FIELDS: LandingPageFields[] = ['id', 'name', 'slug', 'content']
    const landingPageResult: LandingPage<any> = await LandingPagesService.getById(ID_FILTER, SELECTED_FIELDS)
    const landingPageResultFields = Object.keys(landingPageResult).filter(key => key != '__typename')
    expect(landingPageResultFields).toEqual(SELECTED_FIELDS)
    expect(landingPageResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get landing page by slug with all fields successfully', async () => {
    const SLUG_FILTER = 'teste-landing'
    const landingPageResult: LandingPage<any> = await LandingPagesService.getBySlug(SLUG_FILTER)
    expect(landingPageResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should try to get landing page by inexistent id and it should throw error', async () => {
    const ID_FILTER = '999'
    expect(async () => await LandingPagesService.getById(ID_FILTER)).rejects.toThrow()
  })
})
