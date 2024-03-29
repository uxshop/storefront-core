import { getClient } from '../../services/GraphqlService'
import { MenuQueries } from './MenuQueries'
import { Menu, MenuFields, MenuListResponse, MenuResponse, OptionsGetMenu, OptionsGetMenuList } from './MenuTypes'

export class MenuRepositoryGql {
  private static async getOne({ fields, filter }: OptionsGetMenu): Promise<Menu> {
    const menuQuery = new MenuQueries(fields)
    const menuGetOneQuery: string = menuQuery.getOneFullQuery()
    const { menu }: MenuResponse = await getClient().query(menuGetOneQuery, filter && { filter: { ...filter } })

    return menu
  }

  static async getList(optionsGetMenuList?: OptionsGetMenuList): Promise<Menu[]> {
    const menuIds = optionsGetMenuList?.menuIds
    const fields = optionsGetMenuList?.fields

    const menuQuery = new MenuQueries(fields)
    const menuListQuery: string = menuQuery.listFullQuery()
    const { menus }: MenuListResponse = await getClient().query(menuListQuery, menuIds && { menuIds: menuIds })

    return menus
  }

  static async getById(id: number, fields?: MenuFields[]): Promise<Menu> {
    return this.getOne({ fields: fields || null, filter: { id: id } })
  }
}
