import { Brand } from 'src/types/product/BrandTypes'
import { Category } from 'src/types/CategoryTypes'
import { Post } from 'src/types/PostTypes'
import { Product } from 'src/types/product/ProductTypes'
import { LandingPage, LandingPageResponse } from 'src/modules/landing-pages/LandingPagesTypes'
import { BlogCategory } from 'src/modules/blog/category/BlogCategoryTypes'
import { Page } from 'src/types/PageTypes'

export function getCategoryLink(category: Category): string {
  return `${category}/c`
}

export function getProductLink(product: Product): string {
  return `${product}/p`
}

export function getBrandLink(brand: Brand): string {
  return `${brand}/b`
}

export function getInstitutionalLink(institutional: Page): string {
  return `${institutional}/i`
}

export function getLandgingPageLink(landingPage: LandingPage<LandingPageResponse>): string {
  return `${landingPage}/lp`
}

export function getBlogPostLink(blogPost: Post): string {
  return `blog/${blogPost}`
}

export function getBlogCategoryLink(blogCategory: BlogCategory): string {
  return `blog/${blogCategory}`
}
