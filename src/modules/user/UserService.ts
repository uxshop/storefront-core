import { UserRepositoryGql } from './UserRepositoryGql'
import { UserRepositoryJson } from './UserRepositoryJson'
import { LoginCredentials, User, UserFields } from './UserTypes'

const Repository = shop_ctx.mock?.user ? UserRepositoryJson : UserRepositoryGql

export class UserService {
  static async auth(credentials: LoginCredentials, fields?: UserFields[]): Promise<User> {
    try {
      const result: User = await Repository.auth({ fields: fields || null, credentials: credentials })
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  static async get(token: string, fields?: UserFields[]): Promise<User> {
    try {
      const result: User = await Repository.get({ fields: fields || null, token: token })
      return result
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
