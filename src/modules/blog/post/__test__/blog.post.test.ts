import { BlogPostService } from '../BlogPostService'
import { BlogPostFields } from '../BlogPostTypes'
import 'isomorphic-fetch'

const ID_FILTER = '3585'

describe('Blog Post Module', () => {
  it('Should get blog post by id with all fields successfully', async () => {
    const blogPostResult = await BlogPostService.getById(ID_FILTER)
    expect(blogPostResult.id == Number(ID_FILTER)).toBeTruthy()
  })

  it('Should get blog post by id with selected fields successfully', async () => {
    const SELECTED_FIELDS: BlogPostFields[] = ['id', 'name']
    const blogPostResult = await BlogPostService.getById(ID_FILTER, SELECTED_FIELDS)
    const blogPostResultKeys = Object.keys(blogPostResult)
    expect(blogPostResultKeys).toEqual(SELECTED_FIELDS)
    expect(blogPostResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should get blog post by slug with all fields successfully', async () => {
    const SLUG_FILTER = 'post-2'
    const blogPostResult = await BlogPostService.getBySlug(SLUG_FILTER)
    expect(blogPostResult.slug).toEqual(SLUG_FILTER)
  })

  it('Should get blog post list with all fields successfully', async () => {
    const blogPostListResult = await BlogPostService.getList({ page: 1 })

    expect(blogPostListResult.edges.length > 0).toBeTruthy()
  })

  it('Should try to get blog post by inexistent id and it should throw error', async () => {
    const ID_FILTER = '999999999'
    expect(async () => await BlogPostService.getById(ID_FILTER)).rejects.toThrow()
  })
})
