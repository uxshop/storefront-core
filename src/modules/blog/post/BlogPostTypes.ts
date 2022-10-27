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
  post_category_id?: number
  fastSearch?: BlogPostFastSearch
}

export interface OptionsGetBlogPostList {
  filter: BlogPostListFilter
  fields?: BlogPostFields[]
}

export interface BlogPostFilter {
  id?: number
  slug?: string
  post_category_id?: number
}

export type BlogPostFields =
  | 'id'
  | 'post_category_id'
  | 'name'
  | 'slug'
  | 'image {src}'
  | 'description'
  | 'tags'
  | 'active'
  | 'url'
  | 'meta_title'
  | 'meta_description'
  | 'meta_keywords'
  | 'created_at'
  | 'updated_at'
  | 'category'

export type BlogPostCategoryFields =
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
