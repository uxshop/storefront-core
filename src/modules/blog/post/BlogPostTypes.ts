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

export interface BlogPostListFilter extends PaginationFilter {
  post_category_id?: number
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
  | 'image'
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
