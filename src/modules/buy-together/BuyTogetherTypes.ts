import { ID } from '../../types/HelpersTypes'

export type BuyTogetherFields =
  | 'id'
  | 'name'
  | 'title'
  | 'buyButtonText'
  | 'productId'
  | 'colorId'
  | 'dateFrom'
  | 'dateTo'
  | 'active'
  | 'productsPivot'

export interface BuyTogether {
  id: number
  name: string
  title: string
  buyButtonText: string
  productId: number
  dateFrom: string
  dateTo: string | null
  active: boolean
  productsPivot: Product[]
  product: Product
}

export interface PaymentInstallment {
  markup: number
  parcel: number
  discount: number
  interest: number
  total: string
  parcel_price: string
}

export interface Payment {
  id: ID
  gateway_id: ID
  external_id: ID
  name: string
  method: string
  external: string
  max_parcels: number
  parcels_no_interest: number
  installments: PaymentInstallment[]
  min_parcel_price: string
  min_purchase: string
  max_purchase: string
  expire_days: number
  soft_descriptor: string
  description: string
  is_active: boolean
  position: number
  billet_min_discount_price: string
  markup: string
  is_default: boolean
  show_only_instore_shipping: boolean
  created_at: string
  updated_at: string
  installment: PaymentInstallment
}

export interface ShowcaseImage {
  id: number
  productId: number
  src: string
  alt?: string
  colorIds?: number[]
  variationIds?: number[]
  position?: number
}

export interface BrandImage {
  src: string
  alt?: string
}

export interface ShowcaseBrand {
  id: number
  name: string
  slug: string
  description?: string
  shortDescription?: string
  image: BrandImage
  banner: BrandImage
}

export interface ShowcaseCategory {
  id: number
  name: string
  slug: string
  description: string
  image: ShowcaseImage
  breadcrumb: string
  googleTaxonomyId: string
}

export interface ShowcaseColor {
  id: number
  name: string
  slug: string
  hexadecimal?: string
  image?: ShowcaseImage | null
  productImages?: string
  position?: number
}

export interface Attribute {
  id: number
  name: string
  slug: string
  attributeId: number
  attributeName: string
  isActive: boolean
  position: number
}

export interface FeatureValue {
  id: number
  name: string
  slug: string
  image?: ShowcaseImage | null
}

export interface ShowcaseFeature {
  id: number
  name: string
  slug: string
  values: FeatureValue[]
  image?: ShowcaseImage
}

export interface Showcase {
  id: number
  name: string
  slug: string
  payments: Payment[]
  gtin: string
  mpn: string
  additionalShippingTime: number
  externalId?: string
  categoryDefaultId?: number
  hotsiteId?: number
  description?: string
  shortDescription?: string
  relevance?: number
  reference?: number
  tags?: string
  minQuantity?: number
  maxQuantity?: number
  isSellInKitOnly?: boolean
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
  isKit?: boolean
  kitMarkup?: number
  isVirtual?: boolean
  isPreSale?: boolean
  images?: ShowcaseImage[]
  productImages?: ShowcaseImage[]
  video?: string
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
  brand?: ShowcaseBrand
  category?: ShowcaseCategory
  categories?: ShowcaseCategory[]
  color?: ShowcaseColor
  attribute?: Attribute
  attributeSecondary?: Attribute
  features?: ShowcaseFeature[]
  productId?: number
  createdAt?: string
  variations?: any[]
  components?: Component[]
  componentGroups?: ComponentGroup[]
  sku?: string
  colors?: ShowcaseColor[]
}

export interface Component {
  productComponentId: number
  productComponentGroupId: number
  quantity: number
  isDefault: boolean
  isOptional: boolean
  variations: Showcase[]
  productComponentGroupName: string
}

export interface ComponentGroup {
  id: number
  name: string
  slug: string
  optional: boolean
  description?: string
}

export interface Product {
  id: number
  name: string
  slug: string
  payments: Payment[]
  gtin: string
  mpn: string
  additionalShippingTime: number
  externalId?: string
  categoryDefaultId?: number
  hotsiteId?: number
  description?: string
  shortDescription?: string
  relevance?: number
  reference?: string
  tags?: string
  minQuantity?: number
  maxQuantity?: number
  isSellInKitOnly?: boolean
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
  createdAt?: string
  isKit?: boolean
  kitMarkup?: number
  isVirtual?: boolean
  isPreSale?: boolean
  images?: ShowcaseImage[]
  productImages?: ShowcaseImage[]
  video?: string
  weight?: number
  depth?: number
  width?: number
  height?: number
  priceOutOfStock?: number
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
  brand?: ShowcaseBrand
  category?: ShowcaseCategory
  categories?: ShowcaseCategory[]
  color?: ShowcaseColor
  attribute?: Attribute
  attributeSecondary?: Attribute
  features?: ShowcaseFeature[]
  productId?: number
  variations?: Product[]
  components?: Component[]
  componentGroups?: ComponentGroup[]
  sku?: string
  colors?: ShowcaseColor[]
  isGift?: boolean
}
