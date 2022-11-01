import { nullable } from '../../../src/types/NullableTypes'

interface CategoryImage {
  src: string
  alt: string
}

export interface Category {
  id?: number
  name?: nullable<string>
  slug?: nullable<string>
  position?: nullable<number>
  depth?: nullable<number>
  breadcrumb?: nullable<string>
  url?: nullable<string>
  active?: nullable<boolean>
  createdAt?: string
  updatedAt?: string
  parentId?: nullable<number>
  hotsiteId?: nullable<number>
  externalId?: nullable<number>
  description?: nullable<string>
  image?: nullable<CategoryImage>
  banner?: nullable<CategoryImage>
  bannerLink?: nullable<string>
  googleTaxonomyId?: nullable<number>
  metaTitle?: nullable<string>
  metaKeywords?: nullable<string>
  metaDescription?: nullable<string>
  children?: Array<Category>
}

export interface CategoryTree extends Category {}

export interface CategoryFilter {
  id?: number
  slug?: string
}

export interface CategoryResponse {
  category: Category
}

export interface CategoryTreeResponse {
  categoryTree: Array<CategoryTree>
}

export interface OptionsGetCategory<T> {
  fields: nullable<Array<T>>
  filter?: CategoryFilter
}

export type CategoryFields =
  | 'id'
  | 'name'
  | 'position'
  | 'depth'
  | 'breadcrumb'
  | 'url'
  | 'active'
  | 'createdAt'
  | 'updatedAt'
  | 'parentId'
  | 'hotsiteId'
  | 'externalId'
  | 'description'
  | 'image'
  | 'banner'
  | 'bannerLink'
  | 'googleTaxonomyId'
  | 'metaTitle'
  | 'metaKeywords'
  | 'metaDescription'

export type CategoryTreeFields = CategoryFields | 'children'
