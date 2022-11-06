import { ErrorResponse } from 'src/types/HelpersTypes'
import { SettingsRepositoryGql } from './SettingsRepositoryGql'
import { SettingsRepositoryJson } from './SettingsRepositoryJson'
import { Setting, SettingFilter } from './SettingsTypes'

const Repository = shop_ctx.mock?.settings ? SettingsRepositoryJson : SettingsRepositoryGql

export class SettingsService {
  static async getOne(filter?: SettingFilter): Promise<Setting<any>> {
    try {
      const result = await Repository.getOne(filter)
      return result
    } catch (error) {
      return {
        shopId: null,
        themeId: null,
        version: null,
        page: null,
        data: null,
        error: error?.message
      }
    }
  }
}
