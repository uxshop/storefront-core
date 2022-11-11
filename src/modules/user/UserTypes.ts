import { Image } from '../../types/ImageTypes'
import { nullable } from '../../types/HelpersTypes'

export interface User {
  id?: number
  email?: nullable<string>
  first_name?: string
  last_name?: string
  gender?: nullable<string>
  newsletter?: boolean
  marketplace?: boolean
  customer_group_id?: nullable<number>
  external_id?: nullable<number>
  entity?: nullable<string>
  company?: nullable<string>
  ie?: nullable<string>
  birthday?: nullable<string>
  phone?: nullable<string>
  token?: nullable<string>
  reset_token?: nullable<string>
  note?: nullable<string>
  facebook_id?: nullable<string>
  google_id?: nullable<string>
  active?: boolean
  created_at?: nullable<string>
  updated_at?: nullable<string>
  doc?: nullable<string>
  group?: nullable<UserGroup>
  address?: nullable<UserAddress>
  image?: nullable<Image>
}

export interface LoginRespose {
  login: User
}

export interface UserResponse {
  user: User
}

export interface UserGroup {
  id?: nullable<number>
  name?: nullable<string>
}

export interface UserAddress {
  id?: nullable<number>
  receiver?: nullable<string>
  zip_code?: nullable<string>
  street?: nullable<string>
  city?: nullable<string>
  state?: nullable<string>
  number?: nullable<number>
  detail?: nullable<string>
}

export interface OptionsDoLogin {
  fields: nullable<Array<UserFields>>
  credentials: LoginCredentials
}

export interface OptionsGetUser {
  token: string
  fields: nullable<Array<UserFields>>
}

export interface LoginCredentials {
  doc?: String
  email?: String
  password: String
}

export type UserFields =
  | 'id'
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'gender'
  | 'newsletter'
  | 'marketplace'
  | 'customerGroupId'
  | 'externalId'
  | 'entity'
  | 'company'
  | 'ie'
  | 'birthday'
  | 'phone'
  | 'token'
  | 'resetToken'
  | 'note'
  | 'facebookId'
  | 'googleId'
  | 'active'
  | 'createdAt'
  | 'updatedAt'
  | 'doc'
  | 'group'
  | 'address'
  | 'image'

export type UserGroupFiels = 'id' | 'name'

export type UserAddressFields = 'id' | 'receiver' | 'zipcode' | 'street' | 'city' | 'state' | 'number' | 'detail'

export type UserImageFields = 'src' | 'alt'
