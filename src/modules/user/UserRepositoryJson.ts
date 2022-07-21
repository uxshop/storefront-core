import { OptionsDoLogin, OptionsGetUser } from './UserTypes'

export class UserRepositoryJson {
  static async auth(optionsDoLogin: OptionsDoLogin) {
    const result = process.env.DC_CONFIG.mock?.user

    return result || {}
  }

  static async get(optionsGetUser: OptionsGetUser) {
    const result = process.env.DC_CONFIG.mock?.user

    return result || {}
  }
}
