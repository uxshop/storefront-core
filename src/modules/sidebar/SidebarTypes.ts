import { Image } from 'src/types/ImageTypes'
import { nullable } from '../../types/HelpersTypes'

export interface Sidebar {
  filtered: nullable<SidebarFilteredItems[]>
  filters: Filters[]
}

export interface SidebarFilteredItems {
  type: string
  id: number
  name: string
}

export interface Filters {
  type: string
  name: string
  items: SidebarItem[]
}

export interface SidebarResponse {
  sidebarFilters: Sidebar
}

export interface SidebarItem {
  id: number
  name: string
  position: number
  hexadecimal: nullable<string>
  image: nullable<Image>
}

export interface SidebarFilter {
  id: number
  type?: string
  name?: string
}

export type SidebarFields = 'filtered' | 'filters'

export type SidebarFilteredItemsFields = 'type' | 'id' | 'name'

export type FiltersFields = 'type' | 'name' | 'items'

export type SidebarItemFields = 'id' | 'name' | 'position'
