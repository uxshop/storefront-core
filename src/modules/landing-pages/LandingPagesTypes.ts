import { nullable } from '../../types/HelpersTypes'

export interface LandingPage<T> {
  id?: string
  name?: string
  content?: nullable<T>
  slug?: string
  isIndex?: boolean
  isActive?: boolean
  createdAt?: string
  updatedAt?: string
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  metaKeywords?: nullable<string>
}

export interface LandingPageResponse {
  landingPage: LandingPage<string>
}

export interface OptionsGetLandingPage {
  fields: nullable<LandingPageFields[]>
  filter: LandingPageFilter
}

export interface LandingPageFilter {
  id?: nullable<number>
  slug?: nullable<string>
}

export type LandingPageFields =
  | 'id'
  | 'name'
  | 'content'
  | 'slug'
  | 'isIndex'
  | 'isActive'
  | 'createdAt'
  | 'updatedAt'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
