import { Image } from '../../types/ImageTypes'
import { nullable } from '../../types/HelpersTypes'

export interface User {
  id?: nullable<String>
  email?: nullable<String>
  firstName?: nullable<String>
  lastName?: nullable<String>
  gender?: nullable<String>
  newsletter?: nullable<Boolean>
  marketplace?: nullable<Boolean>
  customerGroupId?: nullable<Number>
  externalId?: nullable<Number>
  entity?: nullable<String>
  company?: nullable<String>
  ie?: nullable<String>
  birthday?: nullable<String>
  phone?: nullable<String>
  token?: nullable<string>
  resetToken?: nullable<String>
  note?: nullable<String>
  facebookId?: nullable<String>
  googleId?: nullable<String>
  active?: nullable<Boolean>
  createdAt?: nullable<String>
  updatedAt?: nullable<String>
  doc?: nullable<String>
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
  id?: nullable<Number>
  name?: nullable<String>
}

export interface UserAddress {
  id?: nullable<Number>
  receiver?: nullable<String>
  zipcode?: nullable<String>
  street?: nullable<String>
  city?: nullable<String>
  state?: nullable<String>
  number?: nullable<Number>
  detail?: nullable<String>
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
