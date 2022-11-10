import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { ScriptsRepositoryGql } from './ScriptsRepositoryGql'
import { ScriptsRepositoryJson } from './ScriptsRepositoryJson'
import { Script, ScriptFields } from './ScriptsTypes'

const Repository = shop_ctx.mock?.scripts ? ScriptsRepositoryJson : ScriptsRepositoryGql

export class ScriptsService {
  static async getList(fields?: ScriptFields[]): Promise<Script[]> {
    try {
      const result = await Repository.getList(fields)
      BroadcastService.emit('Scripts', result)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getListByPage(page: string, fields?: ScriptFields[]): Promise<Script[]> {
    try {
      const result = await Repository.getListByPage(page, fields)
      BroadcastService.emit('Scripts', result)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async getListByLocation(location: string, fields?: ScriptFields[]): Promise<Script[]> {
    try {
      const result = await Repository.getListByLocation(location, fields)
      BroadcastService.emit('Scripts', result)
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
