import { Color } from './ColorTypes'
import { Brand } from './BrandTypes'
import { Feature } from './FeatureTypes'
import { Payments } from './PaymentsTypes'
import { Category } from '../CategoryTypes'
import { Component } from './ComponentTypes'
import { Attribute } from './AttributeTypes'
import { ProductImage } from './ProductImageTypes'
import { ComponentGroup } from './ComponentGroupTypes'
import { ProductVariation } from './ProductVariationTypes'
import { nullable } from '../HelpersTypes'
export interface Product {
  id: number
  name: string
  slug: string
  url: string
  createdAt: string
  updatedAt: string
  payments: Payments
  gridId?: nullable<number>
  externalId?: nullable<string>
  categoryDefaultId?: nullable<number>
  brandId?: nullable<number>
  colorId?: nullable<number>
  hotsiteId?: nullable<number>
  description?: nullable<string>
  shortDescription?: nullable<string>
  relevance?: nullable<number>
  tags?: nullable<string>
  minQuantity?: nullable<number>
  maxQuantity?: nullable<number>
  sellInKitOnly?: nullable<boolean>
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  metaKeywords?: nullable<string>
  kit?: nullable<boolean>
  kitMarkup?: nullable<number>
  isVirtual?: nullable<boolean>
  isPreSale?: nullable<boolean>
  images?: nullable<ProductImage[]>
  image?: nullable<ProductImage>
  video?: nullable<string>
  weight?: nullable<number>
  depth?: nullable<number>
  width?: nullable<number>
  height?: nullable<number>
  sellOutOfStock?: nullable<boolean>
  priceOutOfStock?: nullable<number>
  additionalTimeOutOfStock?: nullable<number>
  balance?: nullable<number>
  sellingOutOfStock?: nullable<boolean>
  price?: nullable<number>
  minPriceRange?: nullable<number>
  maxPriceRange?: nullable<number>
  hasPriceRange?: nullable<boolean>
  priceCompare?: nullable<number>
  discount?: nullable<number>
  billetDiscount?: nullable<number>
  paymentsReason?: nullable<string>
  warranty?: nullable<string>
  model?: nullable<string>
  gender?: nullable<string>
  ageGroup?: nullable<string>
  st?: nullable<number>
  ncm?: nullable<string>
  ipi?: nullable<number>
  active?: nullable<boolean>
  brand?: nullable<Brand>
  category?: nullable<Category>
  categories?: nullable<Category[]>
  color?: nullable<Color>
  attribute?: nullable<Attribute>
  attributeSecondary?: nullable<Attribute>
  features?: nullable<Feature[]>
  variation?: nullable<ProductVariation>
  variations?: nullable<ProductVariation[]>
  components?: nullable<Component[]>
  componentGroups?: nullable<ComponentGroup[]>
}
