import { AppsRepositoryJson } from './AppsRepositoryJson'
import { AppsRepositoryGql } from './AppsRepositoryGql'
import { Apps, AppsFields } from './AppsTypes'

const Repository = shop_ctx.mock?.apps ? AppsRepositoryJson : AppsRepositoryGql

export class AppsService {
  static async getById(id: string, fields?: Array<AppsFields>) {
    try {
      const result: Apps = await Repository.getById(Number(id), fields)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
