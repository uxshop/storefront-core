import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { SidebarRepositoryGql } from './SidebarRepositoryGql'
import { SidebarRepositoryJson } from './SidebarRepositoryJson'
import { Sidebar, SidebarFilter } from './SidebarTypes'
import { nullable } from '../../types/HelpersTypes'

const Repository = shop_ctx.mock?.sidebar ? SidebarRepositoryJson : SidebarRepositoryGql

export class SidebarService {
  static async get(filter?: nullable<SidebarFilter[]>): Promise<Sidebar> {
    try {
      const result: Sidebar = await Repository.get(filter)

      BroadcastService.emit('Sidebar', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
