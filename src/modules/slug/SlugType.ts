export interface Slug<T> {
  slug: string
  source: string
  data?: T
}
export interface SlugResponse {
  slug: Slug<string>
}
export interface SlugFilter {
  slug: string
}
