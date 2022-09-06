import { nullable } from '../../../types/NullableTypes'

export interface BlogCategory {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  description?: nullable<string>
  meta_title?: nullable<string>
  meta_description?: nullable<string>
  active?: nullable<Boolean>
  posts_count?: nullable<number>
  position?: nullable<number>
  url?: nullable<string>
  created_at?: nullable<string>
  updated_at?: nullable<string>
}

export interface BlogCategoryResponse {
  blogCategory: BlogCategory
}

export interface BlogCategoryListResponse {
  blogCategories: Array<BlogCategory>
}

export interface OptionsGetBlogCategory {
  fields: nullable<Array<BlogCategoryFields>>
  filter: BlogCategoryFilter
}

export interface BlogCategoryFilter {
  id?: nullable<number>
  slug?: nullable<string>
}

export type BlogCategoryFields =
  | 'id'
  | 'name'
  | 'slug'
  | 'description'
  | 'meta_title'
  | 'meta_description'
  | 'active'
  | 'posts_count'
  | 'position'
  | 'url'
  | 'created_at'
  | 'updated_at'
