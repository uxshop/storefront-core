import { Image } from '../../../src/types/ImageTypes'
import { nullable } from '../../types/NullableTypes'

export interface Menu {
  id?: nullable<Number>
  name?: nullable<String>
  handle?: nullable<String>
  createdAt?: nullable<String>
  updatedAt?: nullable<String>
  values?: MenuValues
}

export interface MenuValues {
  id?: nullable<Number>
  menuId?: nullable<Number>
  brandId?: nullable<Number>
  name?: nullable<String>
  menuType?: nullable<String>
  slug?: nullable<String>
  menuTypeSlug?: nullable<String>
  active?: nullable<Boolean>
  createdAt?: nullable<String>
  image?: nullable<Image>
  parentId?: nullable<String>
  pageId?: nullable<Number>
  hotsiteId?: nullable<Number>
  categoryId?: nullable<Number>
  banner?: nullable<String>
  bannerLink?: nullable<String>
  isFeatured?: nullable<Number>
  link?: nullable<Number>
  menuTypeLink?: nullable<Number>
  updatedAt?: nullable<String>
  position?: nullable<String>
  children?: Array<MenuValues>
}

export interface OptionsGetMenu {
  fields: nullable<Array<MenuFields>>
  filter?: MenuFIlter
}

export interface MenuFIlter {
  id: Number
}

export interface MenuResponse {
  menu: Menu
}

export interface MenuListResponse {
  menus: Array<Menu>
}

export type MenuFields = 'id' | 'name' | 'handle' | 'createdAt' | 'updatedAt' | 'values'

export type MenuValueFields =
  | 'id'
  | 'menuId'
  | 'brandId'
  | 'name'
  | 'menuType'
  | 'slug'
  | 'menuTypeSlug'
  | 'active'
  | 'createdAt'
  | 'image'
  | 'parentId'
  | 'pageId'
  | 'hotsiteId'
  | 'categoryId'
  | 'banner'
  | 'bannerLink'
  | 'isFeatured'
  | 'link'
  | 'menuTypeLink'
  | 'updatedAt'
  | 'position'
  | 'children'
