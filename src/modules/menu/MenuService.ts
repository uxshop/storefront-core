import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { MenuRepositoryGql } from './MenuRepositoryGql'
import { MenuRepositoryJson } from './MenuRepositoryJson'
import { Menu, MenuFields } from './MenuTypes'

const Repository = shop_ctx.mock?.menu ? MenuRepositoryJson : MenuRepositoryGql

export class MenuService {
  static async getById(id: string, fields?: MenuFields[]): Promise<Menu> {
    try {
      const result: Menu = await Repository.getById(Number(id), fields)

      BroadcastService.emit('Menu', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getList(fields?: MenuFields[]): Promise<Menu[]> {
    try {
      const result: Menu[] = await Repository.getList({ fields })

      BroadcastService.emit('Menu', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
