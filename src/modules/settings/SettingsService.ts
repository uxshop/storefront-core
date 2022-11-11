import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { SettingsRepositoryGql } from './SettingsRepositoryGql'
import { SettingsRepositoryJson } from './SettingsRepositoryJson'
import { Setting, SettingFilter } from './SettingsTypes'

const Repository = shop_ctx.mock?.settings ? SettingsRepositoryJson : SettingsRepositoryGql

export class SettingsService {
  static async getOne(filter?: SettingFilter): Promise<Setting<any>> {
    try {
      const result = await Repository.getOne(filter)

      BroadcastService.emit('Settings', result)

      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
