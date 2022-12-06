import { PagesService } from '../PagesService'
import { PageFields } from '../PageTypes'
import 'isomorphic-fetch'

describe('Pages Module', () => {
  const ID_FILTER = '75102'
  it('Should get page by id with all fields successfully', async () => {
    const pagesResult = await PagesService.getById(ID_FILTER)
    expect(pagesResult.id.toString()).toEqual(ID_FILTER)
  })

  it('Should get page by id with selected fields successfully', async () => {
    const SELECTED_FIELDS: Array<PageFields> = ['id', 'slug']
    const pagesResult = await PagesService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const pagesResultKeys = Object.keys(pagesResult)
    expect(pagesResultKeys).toEqual(SELECTED_FIELDS)
    expect(pagesResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get page slug id with all fields successfully', async () => {
    const SLUG_FILTER = 'politica-de-privacidade-1'
    const pagesResult = await PagesService.getBySlug(SLUG_FILTER)
    expect(pagesResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get page list with all fields successfully', async () => {
    const pagesListResult = await PagesService.getList()
    expect(pagesListResult.length > 0).toBeTruthy()
  })

  it('Should try to get page by inexistent id and it should throw error', async () => {
    expect(async () => await PagesService.getById('9999')).rejects.toThrow()
  })
})
