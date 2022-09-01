import { OptionsDoLogin, OptionsGetUser } from './UserTypes'

export class UserRepositoryJson {
  static async auth(optionsDoLogin: OptionsDoLogin) {
    const result = shop.mock?.user

    return result || {}
  }

  static async get(optionsGetUser: OptionsGetUser) {
    const result = shop.mock?.user

    return result || {}
  }
}
