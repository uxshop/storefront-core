import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { SidebarRepositoryGql } from './SidebarRepositoryGql'
import { SidebarRepositoryJson } from './SidebarRepositoryJson'
import { Sidebar, SidebarFilter } from './SidebarTypes'

const Repository = shop_ctx.mock?.sidebar ? SidebarRepositoryJson : SidebarRepositoryGql

export class SidebarService {
  static async get(filter?: SidebarFilter[]): Promise<Sidebar> {
    try {
      const result: Sidebar = await Repository.get(filter)

      BroadcastService.emit('Sidebar', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
