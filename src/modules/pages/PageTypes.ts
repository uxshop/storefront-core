import { Page } from '../../types/PageTypes'
import { nullable } from '../../types/NullableTypes'

export interface PageListResponse {
  pages: Array<Page>
}

export interface PageResponse {
  page: Page
}

export interface OptionsGetPage {
  fields: nullable<Array<PageFields>>
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
  | 'url'
  | 'active'
  | 'faq'
  | 'createdAt'
  | 'updatedAt'
  | 'description'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
