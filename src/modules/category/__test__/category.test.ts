import { CategoryService } from '../CategoryService'
import { CategoryFields } from '../CategoryTypes'
import 'isomorphic-fetch'

const ID_FILTER = '318023'
describe('Category Module', () => {
  it('Should get category by id with all fields successfully', async () => {
    const categoryResult = await CategoryService.getById(ID_FILTER)
    expect(categoryResult.id!.toString()).toEqual(ID_FILTER)
  })

  it('Should get category by id with selected fields successfully', async () => {
    const SELECTED_FIELDS: CategoryFields[] = ['id', 'name', 'position', 'depth', 'breadcrumb']
    const categoryResult = await CategoryService.getById(ID_FILTER, [...SELECTED_FIELDS])
    const categoryResultKeys = Object.keys(categoryResult)
    expect(categoryResultKeys).toEqual(SELECTED_FIELDS)
    expect(categoryResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get category by slug with all fields successfully', async () => {
    const SLUG_FILTER = 'sapatos'
    const categoryResult = await CategoryService.getBySlug(SLUG_FILTER)
    expect(categoryResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get categoryTree by id with selected fields successfully', async () => {
    const categoryTreeResult = await CategoryService.getTree()
    expect(categoryTreeResult.length > 0).toBeTruthy()
  })

  it('Should try get category by inexistent id and it should throw error', async () => {
    const ID_FILTER = '16'
    expect(async () => await CategoryService.getById(ID_FILTER)).rejects.toThrow()
  })
})
