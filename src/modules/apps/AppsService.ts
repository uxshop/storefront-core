import { AppsRepositoryJson } from './AppsRepositoryJson'
import { AppsRepositoryGql } from './AppsRepositoryGql'
import { App, AppsFields } from './AppsTypes'
import { BroadcastService } from '../../services/broadcast/broadcast-service'

const Repository = shop_ctx.mock?.apps ? AppsRepositoryJson : AppsRepositoryGql

export class AppsService {
  static async getById(id: string, fields?: AppsFields[]): Promise<App> {
    try {
      const result = await Repository.getById(Number(id), fields)
      BroadcastService.emit('Apps', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
