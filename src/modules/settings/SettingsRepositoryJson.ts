export class SettingsRepositoryJson {
  static async getOne() {
    const result = process.env.DC_CONFIG.mock?.settings

    return result || {}
  }
}
