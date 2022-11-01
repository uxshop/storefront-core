import { nullable } from '../../types/NullableTypes'

export interface LandingPage<T> {
  shopId?: nullable<Number>
  id?: nullable<String>
  name?: nullable<String>
  content?: nullable<T>
  slug?: nullable<String>
  notIndex?: nullable<Boolean>
  active?: nullable<Boolean>
  url?: nullable<String>
  createdAt?: nullable<String>
  updatedAt?: nullable<String>
  metaTitlen?: nullable<String>
  metaDescription?: nullable<String>
  metaKeywords?: nullable<String>
}

export interface LandingPageResponse {
  landingPage: LandingPage<string>
}

export interface OptionsGetLandingPage {
  fields: nullable<Array<LandingPageFields>>
  filter: LandingPageFilter
}

export interface LandingPageFilter {
  id?: nullable<Number>
  slug?: nullable<String>
}

export type LandingPageFields =
  | 'shopId'
  | 'id'
  | 'name'
  | 'content'
  | 'slug'
  | 'notIndex'
  | 'active'
  | 'url'
  | 'createdAt'
  | 'updatedAt'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
