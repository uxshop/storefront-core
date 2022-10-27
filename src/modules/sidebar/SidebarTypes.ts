import { nullable } from '../../types/NullableTypes'

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
}

export interface SidebarFilter {
  id: number
  type: string
  name: string
}

export type SidebarFields = 'filtered' | 'filters'

export type SidebarFilteredItemsFields = 'type' | 'id' | 'name'

export type FiltersFields = 'type' | 'name' | 'items'

export type SidebarItemFields = 'id' | 'name' | 'position'
