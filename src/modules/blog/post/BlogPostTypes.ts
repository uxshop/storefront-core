import { Post } from '../../../types/PostTypes'
import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../../types/PaginationTypes'

export interface BlogPostResponse {
  blogPost: Post
}

export interface BlogPostListResponse {
  blogPosts: BlogPostList
}

export interface BlogPostEdges extends PageableEdgeObject<Post> {}

export interface BlogPostList extends PageableListObject<BlogPostEdges> {}

export interface OptionsGetBlogPost {
  filter: BlogPostFilter
  fields?: BlogPostFields[]
}

export type BlogPostTokens = 'name' | 'slug' | 'description' | 'tags'
export interface BlogPostFastSearch {
  queryString: string
  fields?: BlogPostTokens
}

export interface BlogPostListFilter extends PaginationFilter {
  postCategoryId?: number
  fastSearch?: BlogPostFastSearch
}

export interface OptionsGetBlogPostList {
  filter: BlogPostListFilter
  fields?: BlogPostFields[]
}

export interface BlogPostFilter {
  id?: number
  slug?: string
  postCategoryId?: number
}

export type BlogPostFields =
  | 'id'
  | 'postCategoryId'
  | 'name'
  | 'slug'
  | 'image {src}'
  | 'description'
  | 'tags'
  | 'isActive'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
  | 'createdAt'
  | 'updatedAt'
  | 'category'

export type BlogPostCategoryFields =
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
