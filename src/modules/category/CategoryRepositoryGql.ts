import {
  Category,
  OptionsGetCategory,
  CategoryResponse,
  CategoryFields,
  CategoryTreeResponse,
  CategoryTree,
  CategoryTreeFields
} from './CategoryTypes'
import { getClient } from '../../services/GraphqlService'
import { CategoryQueries } from './CategoryQueries'

export class CategoryRepositoryGql {
  private static async getOne({ fields, filter }: OptionsGetCategory<CategoryFields>): Promise<Category> {
    const categoryQuery = new CategoryQueries(fields)
    const getOneQuery: string = categoryQuery.getOneFullQuery()
    const { category }: CategoryResponse = await getClient().query(getOneQuery, filter && { filter: { ...filter } })

    return category
  }

  static async getTree(fields?: CategoryTreeFields[]): Promise<CategoryTree[]> {
    const categoryQuery = new CategoryQueries(fields)
    const getTreeQuery: string = categoryQuery.treeFullQuery()
    const { categoryTree }: CategoryTreeResponse = await getClient().query(getTreeQuery)

    return categoryTree
  }

  static async getById(id: number, fields?: CategoryFields[]): Promise<Category> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }

  static async getBySlug(slug: string, fields?: CategoryFields[]): Promise<Category> {
    return this.getOne({ fields: fields || null, filter: { slug: slug } })
  }
}
