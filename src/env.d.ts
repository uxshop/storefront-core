import { ShopDataConfig } from './types/ShopTypes'

interface shop {
  token: string
  api_url: string
  api_editor: string
  domain: string
  base_path?: string
  mock?: {
    apps?: any
    category?: any
    categoryTree?: any
    blogCategory?: any
    blogPost?: any
    brand?: any
    cart?: any
    freight?: any
    landing_pages?: any
    menu?: any
    newsletter?: any
    pages?: any
    page?: any
    scripts?: any
    sidebar?: any
    sections?: any
    settings?: any
    slug?: any
    shop?: any
    products?: any
    user?: any
    live_shop?: any
  }
}

declare global {
  var shop_ctx: shop
  interface Window {
    shop: ShopDataConfig
  }
}
