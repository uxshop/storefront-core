import { BlogCategoryService } from '../BlogCategoryService'
import { BlogCategoryFields } from '../BlogCategoryTypes'
import 'isomorphic-fetch'

const ID_FILTER = '1058'

describe('Blog Category Module', () => {
  it('Should get blog category by id with all fields successfully', async () => {
    const blogCategoryResult = await BlogCategoryService.getById(ID_FILTER)
    expect(blogCategoryResult.id!.toString()).toEqual(ID_FILTER)
  })

  it('Should get blog category by id with selected fields successfully', async () => {
    const SELECTED_FIELDS: BlogCategoryFields[] = ['id', 'name']
    const blogCategoryResult = await BlogCategoryService.getById(ID_FILTER, SELECTED_FIELDS)
    const blogCategoryResultFields = Object.keys(blogCategoryResult)
    expect(blogCategoryResultFields).toEqual(SELECTED_FIELDS)
    expect(blogCategoryResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get blog category by slug with all fields successfully', async () => {
    const SLUG_FILTER = 'teste-4-2'
    const blogCategoryResult = await BlogCategoryService.getBySlug(SLUG_FILTER)
    expect(blogCategoryResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get blog category list with all fields successfully', async () => {
    const blogCategoryListResult = await BlogCategoryService.getList()
    expect(blogCategoryListResult.length > 0).toBeTruthy()
  })

  it('Should try to get blog category by inexistent id and it should throw error', async () => {
    const ID_FILTER = '11'
    expect(async () => await BlogCategoryService.getById(ID_FILTER)).rejects.toThrow()
  })
})
