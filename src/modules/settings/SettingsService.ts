import { SettingsRepositoryGql } from './SettingsRepositoryGql'
import { SettingsRepositoryJson } from './SettingsRepositoryJson'
import { Setting } from './SettingsTypes'

const Repository = process.env.DC_CONFIG.mock?.settings ? SettingsRepositoryJson : SettingsRepositoryGql

export class SettingsService {
  static async getOne() {
    const result: Setting<unknown> = await Repository.getOne()
    return result
  }
}
