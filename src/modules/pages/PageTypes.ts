import { Page } from '../../types/PageTypes'
import { nullable } from '../../types/HelpersTypes'

export interface PageListResponse {
  pages: Page[]
}

export interface PageResponse {
  page: Page
}

export interface OptionsGetPage {
  fields: nullable<PageFields[]>
  filter?: PageFilter
}

export interface PageFilter {
  id?: Number
  slug?: String
}

export type PageFields =
  | 'id'
  | 'name'
  | 'slug'
  | 'template'
  | 'isActive'
  | 'faq'
  | 'createdAt'
  | 'updatedAt'
  | 'description'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
