export interface Slug {
  slug: string
  source: string
  data?: string
}
export interface SlugResponse {
  slug: Slug
}
export interface SlugFilter {
  slug: string
}
