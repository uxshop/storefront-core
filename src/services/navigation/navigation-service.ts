export function getBrandLink(brandSlug: string): string {
  return `${brandSlug}/b`
}

export function getBlogCategoryLink(blogCategorySlug: string): string {
  return `blog/${blogCategorySlug}`
}

export function getBlogPostLink(blogPostSlug: string, blogCategorySlug: string): string {
  return `blog/${blogCategorySlug}/${blogPostSlug}`
}

export function getCategoryLink(categorySlug: string): string {
  return `${categorySlug}/c`
}

export function getInstitutionalLink(institutionalSlug: string): string {
  return `${institutionalSlug}/i`
}

export function getLandingPageLink(landingPageSlug: string): string {
  return `${landingPageSlug}/lp`
}

export function getProductLink(productSlug: string): string {
  return `${productSlug}/p`
}
