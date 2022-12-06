import { Image } from '../../types/ImageTypes'
import { nullable } from '../../types/HelpersTypes'

export interface User {
  id?: number
  email?: nullable<string>
  firstName?: string
  lastName?: string
  gender?: nullable<string>
  newsletter?: boolean
  marketplace?: boolean
  customerGroupId?: nullable<number>
  externalId?: nullable<number>
  entity?: nullable<string>
  company?: nullable<string>
  ie?: nullable<string>
  birthday?: nullable<string>
  phone?: nullable<string>
  token?: nullable<string>
  resetToken?: nullable<string>
  note?: nullable<string>
  facebookId?: nullable<string>
  googleId?: nullable<string>
  active?: boolean
  createdAt?: nullable<string>
  updatedAt?: nullable<string>
  doc?: nullable<string>
  group?: nullable<UserGroup>
  address?: nullable<UserAddress>
  image?: nullable<Image>
}

export interface LoginResponse {
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
  zipCode?: nullable<string>
  street?: nullable<string>
  city?: nullable<string>
  state?: nullable<string>
  number?: nullable<number>
  detail?: nullable<string>
}

export interface OptionsDoLogin {
  fields: nullable<UserFields[]>
  credentials: LoginCredentials
}

export interface OptionsGetUser {
  token: string
  fields: nullable<UserFields[]>
}

export interface LoginCredentials {
  doc?: string
  email?: string
  password: string
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
