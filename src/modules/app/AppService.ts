import { AppRepositoryJson } from './AppRepositoryJson'
import { AppRepositoryGql } from './AppRepositoryGql'
import { App, AppFields } from './AppTypes'
import { BroadcastService } from '../../services/broadcast/broadcast-service'

const Repository = () => (shop_ctx.mock?.apps ? AppRepositoryJson : AppRepositoryGql)

export class AppService {
  static async getById(id: string, fields?: AppFields[]): Promise<App> {
    try {
      const result = await Repository().getById(Number(id), fields)
      BroadcastService.emit('Apps', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
