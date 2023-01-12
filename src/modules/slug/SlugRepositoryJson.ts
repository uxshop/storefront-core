import { SlugFilter } from './SlugType'

export class SlugRepositoryJson {
  static async getOne(filter?: SlugFilter) {
    const { slug } = shop_ctx.mock?.slug
    const result = slug && slug.filter(slugData => slugData.slug == filter.slug)

    return result || {}
  }
}
