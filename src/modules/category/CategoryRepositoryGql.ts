import {
  Category,
  OptionsGetCategory,
  CategoryResponse,
  CategoryFields,
  CategoryTreeResponse,
  CategoryTree,
  CategoryTreeFields
} from './CategoryTypes'
import { client } from '../../services/GraphqlService'
import { CategoryQueries } from './CategoryQueries'

export class CategoryRepositoryGql {
  private static async getOne({ fields, filter }: OptionsGetCategory<CategoryFields>): Promise<Category> {
    const categoryQuery = new CategoryQueries(fields)
    const getOneQuery: string = categoryQuery.getOnefullQuery()
    try {
      const { category }: CategoryResponse = await client.query(getOneQuery, filter && { filter: { ...filter } })

      return category
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getTree(fields?: Array<CategoryTreeFields>): Promise<Array<CategoryTree>> {
    const categoryQuery = new CategoryQueries(fields)
    const getTreeQuery: string = categoryQuery.treeFullQuery()
    try {
      const { categoryTree }: CategoryTreeResponse = await client.query(getTreeQuery)

      return categoryTree
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getById(id: number, fields?: Array<CategoryFields>): Promise<Category> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: string, fields?: Array<CategoryFields>): Promise<Category> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
