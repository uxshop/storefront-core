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
  created_at?: string
  updated_at?: string
  parent_id?: nullable<number>
  hotsite_id?: nullable<number>
  external_id?: nullable<number>
  description?: nullable<string>
  image?: nullable<CategoryImage>
  banner?: nullable<CategoryImage>
  banner_link?: nullable<string>
  google_taxonomy_id?: nullable<number>
  meta_title?: nullable<string>
  meta_keywords?: nullable<string>
  meta_description?: nullable<string>
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
  | 'created_at'
  | 'updated_at'
  | 'parent_id'
  | 'hotsite_id'
  | 'external_id'
  | 'description'
  | 'image'
  | 'banner'
  | 'banner_link'
  | 'google_taxonomy_id'
  | 'meta_title'
  | 'meta_keywords'
  | 'meta_description'

export type CategoryTreeFields = CategoryFields | 'children'
