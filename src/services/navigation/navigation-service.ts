export class NavigationService {
  static getBrandLink(brandSlug: string): string {
    return `${brandSlug}/b`
  }

  static getBlogCategoryLink(blogCategorySlug: string): string {
    return `blog/${blogCategorySlug}`
  }

  static getBlogPostLink(blogPostSlug: string, blogCategorySlug: string): string {
    return `blog/${blogCategorySlug}/${blogPostSlug}`
  }

  static getCategoryLink(categorySlug: string): string {
    return `${categorySlug}/c`
  }

  static getInstitutionalLink(institutionalSlug: string): string {
    return `${institutionalSlug}/i`
  }

  static getLandingPageLink(landingPageSlug: string): string {
    return `${landingPageSlug}/lp`
  }

  static getProductLink(productSlug: string): string {
    return `${productSlug}/p`
  }
}
