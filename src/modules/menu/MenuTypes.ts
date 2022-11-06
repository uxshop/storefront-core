import { Image } from '../../../src/types/ImageTypes'
import { nullable } from '../../types/HelpersTypes'

export interface Menu {
  id?: number
  name?: string
  handle?: nullable<string>
  createdAt?: string
  updatedAt?: string
  values?: MenuValues[]
}

export interface MenuValues {
  id?: number
  menuId?: number
  brandId?: nullable<number>
  name?: string
  menuType?: string
  slug?: string
  menuTypeSlug?: nullable<string>
  isActive?: boolean
  createdAt?: string
  image?: nullable<Image>
  parentId?: string
  pageId?: nullable<number>
  hotsiteId?: nullable<number>
  categoryId?: nullable<number>
  banner?: nullable<Image>
  bannerLink?: nullable<string>
  isFeatured?: boolean
  link?: nullable<number>
  menuTypeLink?: nullable<number>
  updatedAt?: string
  position?: nullable<string>
  children?: MenuValues[]
}

export interface OptionsGetMenu {
  fields: nullable<MenuFields[]>
  filter?: MenuFIlter
}

export interface MenuFIlter {
  id: number
}

export interface MenuResponse {
  menu: Menu
}

export interface MenuListResponse {
  menus: Menu[]
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
  | 'isActive'
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
