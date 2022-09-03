import { Shop } from '../modules/shop/ShopTypes'

export interface ShopConfig {
  token: string
  api_url?: string
  api_editor?: string
  domain?: string
  mock?: any
  base_path?: string
  settings?: Shop
}
