import { nullable } from '../../types/HelpersTypes'
import {
  ProductAttribute,
  ProductBrand,
  ProductCategory,
  ProductColor,
  ProductImage,
  ProductPayment,
  ProductVariation
} from '../product/ProductTypes'
import type { ReleaseDate } from '../../types/ReleaseDateTypes'
import type { ToBooleanRecursive } from '../../helpers/typesHelper'

export type ProductField = {
  id?: string
  name?: string
  slug?: string
  payments?: nullable<ProductPayment[]>
  gtin?: string
  mpn?: string
  additionalShippingTime?: number
  externalId?: string
  categoryDefaultId?: number
  hotsiteId?: number
  description?: string
  shortDescription?: string
  relevance?: number
  releaseDate?: nullable<ReleaseDate>
  tags?: string
  minQuantity?: number
  maxQuantity?: number
  isSellInKitOnly?: boolean
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
  isKit?: boolean
  kitmarkup?: number
  isVirtual?: boolean
  isPreSale?: boolean
  video?: string
  images?: ProductImage[]
  weight?: number
  depth?: number
  width?: number
  height?: number
  isSellOutOfStock?: boolean
  additionalTimeOutOfStock?: number
  balance?: number
  price?: number
  minPriceRange?: number
  maxPriceRange?: number
  hasPriceRange?: boolean
  priceCompare?: number
  discount?: number
  billetDiscount?: number
  paymentsReason?: string
  warranty?: string
  model?: string
  gender?: string
  ageGroup?: string
  brand?: nullable<ProductBrand>
  category?: nullable<ProductCategory>
  categories?: nullable<ProductCategory[]>
  color?: ProductColor
  attribute?: nullable<ProductAttribute>
  attributeSecondary?: nullable<ProductAttribute>
  productId?: number
  variations?: nullable<ProductVariation[]>
  priceOutOfStock?: nullable<number>
  sku?: nullable<string>
}

export interface ProductFilter {
  productId?: number
}

export interface OptionsGetProductField {
  fields: ToBooleanRecursive<ProductField>
  filter: ProductFilter
}

export interface ProductFieldResponse {
  productFields: nullable<ProductField>
}

export type ProductFieldQuery = ToBooleanRecursive<ProductField>
