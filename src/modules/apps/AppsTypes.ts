import { nullable } from '../../../src/types/NullableTypes'

export interface Apps {
  id?: nullable<string>
  slug?: nullable<number>
  price?: nullable<number>
  shop_id?: nullable<number>
  store_app_id?: nullable<number>
  content?: nullable<string>
  user_id?: nullable<string>
  bridge_package_id?: nullable<string>
}

export interface AppsFilter {
  id: nullable<number>
}

export interface AppsResponse {
  apps: Apps
}

export type AppsFields =
  | 'id'
  | 'slug'
  | 'price'
  | 'shop_id'
  | 'store_app_id'
  | 'content'
  | 'user_id'
  | 'bridge_package_id'
