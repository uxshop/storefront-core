export class SettingsRepositoryJson {
  static async getOne() {
    const result = shop.mock?.settings

    return result || {}
  }
}
