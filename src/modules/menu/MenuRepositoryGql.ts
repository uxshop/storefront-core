import { client } from '../../services/GraphqlService'
import { MenuQueries } from './MenuQueries'
import { Menu, MenuFields, MenuListResponse, MenuResponse, OptionsGetMenu } from './MenuTypes'

export class MenuRepositoryGql {
  private static async getOne({ fields, filter }: OptionsGetMenu): Promise<Menu> {
    const menuQuery = new MenuQueries(fields)
    const menuGetOneQuery: string = menuQuery.getOneFullQuery()
    const { menu }: MenuResponse = await client.query(menuGetOneQuery, filter && { filter: { ...filter } })

    return menu
  }

  static async getList(fields?: MenuFields[]): Promise<Menu[]> {
    const menuQuery = new MenuQueries(fields)
    const menuListQuery: string = menuQuery.listFullQuery()
    const { menus }: MenuListResponse = await client.query(menuListQuery)

    return menus
  }

  static async getById(id: number, fields?: MenuFields[]): Promise<Menu> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }
}
