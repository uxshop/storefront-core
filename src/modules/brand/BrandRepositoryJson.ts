import { BrandFields, OptionsGetBrandList } from './BrandTypes'

export class BrandRepositoryJson {
  static async getList({ fields, filter }: OptionsGetBrandList) {
    const result = shop_ctx.mock?.brand
    return result || {}
  }

  static async getById(id: Number, fields?: Array<BrandFields>) {
    const brandList = shop_ctx.mock?.brand
    const result = brandList && brandList.filter(brand => brand.id == id)[0]
    return result || {}
  }

  static async getBySlug(slug: String, fields?: Array<BrandFields>) {
    const brandList = shop_ctx.mock?.brand
    const result = brandList && brandList.filter(brand => brand.slug == slug)[0]
    return result || {}
  }
}
