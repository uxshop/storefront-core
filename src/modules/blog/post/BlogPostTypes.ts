import { Post } from '../../../types/PostTypes'
import { nullable } from '../../../types/NullableTypes'
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
  fields: nullable<Array<BlogPostFields>>
  filter: BlogPostFilter
}

export interface BlogPostListFilter extends PaginationFilter {
  post_category_id?: nullable<Number>
}

export interface OptionsGetBlogPostList {
  fields: nullable<Array<BlogPostFields>>
  filter: BlogPostListFilter
}

export interface BlogPostFilter {
  id?: nullable<Number>
  slug?: nullable<String>
  post_category_id?: nullable<Number>
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
