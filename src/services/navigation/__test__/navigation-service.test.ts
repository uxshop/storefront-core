import {
  getCategoryLink,
  getProductLink,
  getBrandLink,
  getInstitutionalLink,
  getBlogPostLink,
  getBlogCategoryLink,
  getLandingPageLink
} from '../navigation-service'

import productItem from '../../../mocks/product/product.json'
import categoryItem from '../../../mocks/category/category.json'
import brandItem from '../../../mocks/brand/brand.json'
import institutionalItem from '../../../mocks/institutional/institutional.json'
import blogPostItem from '../../../mocks/blog-post/blog-post.json'
import blogCategoryItem from '../../../mocks/blog/blog-category.json'
import landingPageItem from '../../../mocks/landing-page/landing-page.json'

describe('Navigation Service', () => {
  it('Should get brand link', async () => {
    const brandLink = getBrandLink(brandItem.slug)
    expect(brandLink).toEqual(brandLink)
  })
  it('Should get blog category link', async () => {
    const blogCategoryLink = getBlogCategoryLink(blogCategoryItem.slug)
    expect(blogCategoryLink).toEqual(blogCategoryLink)
  })
  it('Should get blog post link', async () => {
    const blogPostLink = getBlogPostLink(blogCategoryItem.slug, blogPostItem.slug)
    expect(blogPostLink).toEqual(blogPostLink)
  })
  it('Should get category link', async () => {
    const categoryLink = getCategoryLink(categoryItem.slug)
    expect(categoryLink).toEqual(categoryLink)
  })
  it('Should institutional link', async () => {
    const institutionalLink = getInstitutionalLink(institutionalItem.slug)
    expect(institutionalLink).toEqual(institutionalLink)
  })
  it('Should landing page link', async () => {
    const landingPageLink = getLandingPageLink(landingPageItem.slug)
    expect(landingPageLink).toEqual(landingPageLink)
  })
  it('Should get product link', async () => {
    const productLink = getProductLink(productItem.slug)
    expect(productLink).toEqual(productLink)
  })
})
