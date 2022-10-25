export function getCategoryLink(categorySlug: string): string {
  return `${categorySlug}/c`
}

export function getProductLink(productSlug: string): string {
  return `${productSlug}/p`
}

export function getBrandLink(brandSlug: string): string {
  return `${brandSlug}/b`
}

export function getInstitutionalLink(institutionalSlug: string): string {
  return `${institutionalSlug}/i`
}

export function getLandgingPageLink(landingPageSlug: string): string {
  return `${landingPageSlug}/lp`
}

export function getBlogPostLink(blogPostSlug: string, blogCategorySlug: string): string {
  return `blog/${blogCategorySlug}/${blogPostSlug}`
}

export function getBlogCategoryLink(blogCategorySlug: string): string {
  return `blog/${blogCategorySlug}`
}
