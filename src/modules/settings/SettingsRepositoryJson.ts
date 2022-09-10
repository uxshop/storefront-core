export class SettingsRepositoryJson {
  static async getOne() {
    const result = shop_ctx.mock?.settings

    return result || {}
  }
}
