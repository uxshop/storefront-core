import { SettingsRepositoryGql } from './SettingsRepositoryGql'
import { SettingsRepositoryJson } from './SettingsRepositoryJson'
import { Setting, SettingFilter } from './SettingsTypes'

const Repository = shop.mock?.settings ? SettingsRepositoryJson : SettingsRepositoryGql

export class SettingsService {
  static async getOne(filter?: SettingFilter) {
    const result: Setting<unknown> = await Repository.getOne(filter)
    return result
  }
}
