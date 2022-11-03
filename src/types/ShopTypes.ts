import { Shop } from '../modules/shop/ShopTypes'

export interface ShopConfig {
  token: string
  apiUrl?: string
  apiEditor?: string
  domain?: string
  mock?: string
  basePath?: string
}

export interface ShopDataConfig {
  config: ShopConfig
  settings: Shop
}
