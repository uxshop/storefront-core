import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { SidebarRepositoryGql } from './SidebarRepositoryGql'
import { SidebarRepositoryJson } from './SidebarRepositoryJson'
import { OptionsGetSidebar, Sidebar } from './SidebarTypes'
import { nullable } from '../../types/HelpersTypes'

const Repository = shop_ctx.mock?.sidebar ? SidebarRepositoryJson : SidebarRepositoryGql

export class SidebarService {
  static async get(filters?: OptionsGetSidebar): Promise<Sidebar> {
    try {
      const result: Sidebar = await Repository.get(filters)

      BroadcastService.emit('Sidebar', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
