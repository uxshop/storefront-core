import { nullable } from '../../../types/NullableTypes'

export interface BlogCategory {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  description?: nullable<string>
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  isActive?: nullable<boolean>
  postsCount?: nullable<number>
  position?: nullable<number>
  createdAt?: nullable<string>
  updatedAt?: nullable<string>
}

export interface BlogCategoryResponse {
  blogCategory: BlogCategory
}

export interface BlogCategoryListResponse {
  blogCategories: BlogCategory[]
}

export interface OptionsGetBlogCategory {
  fields: nullable<BlogCategoryFields[]>
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
  | 'metaTitle'
  | 'metaDescription'
  | 'isActive'
  | 'postsCount'
  | 'position'
  | 'createdAt'
  | 'updatedAt'
