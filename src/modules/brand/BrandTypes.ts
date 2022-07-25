import { nullable } from '../../types/NullableTypes'
import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { Brand } from '../../types/product/BrandTypes'

export interface BrandEdges extends PageableEdgeObject<Brand> {}

export interface BrandList extends PageableListObject<BrandEdges> {}

export interface BrandListResponse {
  brands: BrandList
}

export interface BrandFilter {
  id?: Number
  slug?: String
}

export interface BrandResponse {
  brand: Brand
}

export interface OptionsGetBrand {
  fields: nullable<Array<BrandFields>>
  filter?: BrandFilter
}

export interface OptionsGetBrandList {
  fields: nullable<Array<BrandFields>>
  filter: PaginationFilter
}

export type BrandFields =
  | 'id'
  | 'hotsite_id'
  | 'external_id'
  | 'name'
  | 'slug'
  | 'description'
  | 'short_description'
  | 'image {alt, src}'
  | 'banner {alt, src}'
  | 'meta_title'
  | 'meta_keywords'
  | 'meta_description'
  | 'position'
  | 'url'
  | 'active'
  | 'created_at'
  | 'updated_at'
