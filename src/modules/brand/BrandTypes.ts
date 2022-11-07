import { nullable } from '../../types/NullableTypes'
import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { Brand } from '../../types/product/BrandTypes'

export interface BrandEdges extends PageableEdgeObject<Brand> {}

export interface BrandList extends PageableListObject<BrandEdges> {}

export interface BrandListResponse {
  brands: BrandList
}

export interface BrandFilter {
  id?: number
  slug?: String
}

export interface BrandResponse {
  brand: Brand
}

export interface OptionsGetBrand {
  fields: BrandFields[]
  filter?: BrandFilter
}

export interface OptionsGetBrandList {
  fields: BrandFields[]
  filter: PaginationFilter
}

export type BrandFields =
  | 'id'
  | 'hotsiteId'
  | 'externalId'
  | 'name'
  | 'slug'
  | 'description'
  | 'shortDescription'
  | 'image {alt, src}'
  | 'banner {alt, src}'
  | 'metaTitle'
  | 'metaKeywords'
  | 'metaDescription'
  | 'position'
  | 'isActive'
  | 'createdAt'
  | 'updatedAt'
