/// <reference types="vite/client" />

import { Shop } from './modules/shop/ShopTypes'
import { ShopConfig } from './types/ShopTypes'

interface shop {
  token: string
  api_url: string
  api_editor: string
  domain: string
  base_path?: string
  settings?: Shop
  mock?: {
    apps?: any
    category?: any
    categoryTree?: any
    blogCategory?: any
    blogPost?: any
    brand?: any
    cart?: any
    landing_pages?: any
    menu?: any
    pages?: any
    page?: any
    scripts?: any
    sections?: any
    settings?: any
    shop?: any
    showcase?: any
    user?: any
  }
}

declare global {
  var shop: shop
  interface Window {
    shop: ShopConfig
  }
}
