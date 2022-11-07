import { PagesService } from '../PagesService'
import { PageFields } from '../PageTypes'
import 'isomorphic-fetch'

describe('Pages Module', () => {
  it('Should get page by id with all fields succeffully', async () => {
    const ID_FILTER = '75124'
    const pagesResult = await PagesService.getById(ID_FILTER)
    expect(pagesResult.id.toString()).toEqual(ID_FILTER)
  })

  it('Should get page by id with selected fields succeffully', async () => {
    const SELECTED_FIELDS: Array<PageFields> = ['id', 'slug']
    const ID_FILTER = '75124'
    const pagesResult = await PagesService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const pagesResultKeys = Object.keys(pagesResult).filter(key => key != '__typename')
    expect(pagesResultKeys).toEqual(SELECTED_FIELDS)
    expect(pagesResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get page slug id with all fields succeffully', async () => {
    const SLUG_FILTER = 'faq'
    const pagesResult = await PagesService.getBySlug(SLUG_FILTER)
    expect(pagesResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get page list with all fields succeffully', async () => {
    const pagesListResult = await PagesService.getList()
    expect(pagesListResult.length > 0).toBeTruthy()
  })

  it('Should try to get page by inexistant id and it should throw error', async () => {
    expect(async () => await PagesService.getById('1')).rejects.toThrow()
  })
})
