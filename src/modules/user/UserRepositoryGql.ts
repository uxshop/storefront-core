import { client } from '../../services/GraphqlService'
import { UserQueries } from './UserQueries'
import { LoginResponse, OptionsDoLogin, OptionsGetUser, User, UserResponse } from './UserTypes'

export class UserRepositoryGql {
  static async auth({ fields, credentials }: OptionsDoLogin): Promise<User> {
    const userQuery = new UserQueries(fields)
    const doLoginQuery: string = userQuery.auth()
    const { login }: LoginResponse = await client.mutation(
      doLoginQuery,
      credentials && { credentials: { ...credentials } }
    )

    return login
  }

  static async get({ token, fields }: OptionsGetUser): Promise<User> {
    const userQuery = new UserQueries(fields)
    const getUserQuery: string = userQuery.get()
    const { user }: UserResponse = await client.query(getUserQuery, { filter: { userToken: token } })

    return user
  }
}
