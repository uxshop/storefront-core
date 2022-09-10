import { Shop } from '../modules/shop/ShopTypes'

export interface ShopConfig {
  token: string
  api_url?: string
  api_editor?: string
  domain?: string
  mock?: string
  base_path?: string
}

export interface ShopDataConfig {
  config: ShopConfig
  settings: Shop
}
