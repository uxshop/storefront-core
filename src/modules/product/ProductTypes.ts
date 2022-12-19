import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { nullable } from '../../types/HelpersTypes'
import { SidebarFilter } from '../sidebar/SidebarTypes'

export interface Product {
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
  features?: nullable<ProductFeature[]>
  productId?: number
  variations?: nullable<ProductVariation[]>
  components?: nullable<ProductComponent[]>
  componentGroups?: nullable<ProductComponentGroup[]>
  priceOutOfStock?: nullable<number>
}

export interface ProductComponentVariation
  extends Pick<
    ProductVariation,
    | 'id'
    | 'productId'
    | 'price'
    | 'slug'
    | 'priceCompare'
    | 'gtin'
    | 'mpn'
    | 'additionalShippingTime'
    | 'images'
    | 'balance'
    | 'color'
    | 'attribute'
    | 'attributeSecondary'
  > {}

export interface ProductResponse {
  product: nullable<Product>
}

export interface ProductListResponse {
  products: nullable<ProductList>
}

export interface ProductBrand {
  id?: number
  name?: string
  slug?: string
  description?: string
  shortDescription?: string
  image?: nullable<ProductImage>
  banner?: nullable<ProductImage>
}

export interface ProductCategory {
  id?: number
  name?: string
  slug?: string
  description?: string
  image?: nullable<ProductImage>
  breadcrumb?: string
  googleTaxonomyId?: string
}

export interface PaymentInstallment {
  markup?: number
  parcel?: number
  discount?: number
  interest?: number
  total?: string
  parcelPrice?: string
}

export interface ProductPayment {
  id?: number
  gatewayId?: number
  externalId?: number
  name?: string
  method?: string
  external?: string
  maxParcels?: number
  parcelsNoInterest?: number
  installments?: PaymentInstallment[]
  minParcelPrice?: string
  minPurchase?: string
  maxPurchase?: string
  expireDays?: number
  softDescriptor?: string
  description?: string
  isActive?: boolean
  position?: number
  billetMinDiscountPrice?: string
  markup?: string
  instructions?: string
  isDefault?: boolean
  isShowOnlyInstoreShipping?: boolean
  createdAt?: string
  updatedAt?: string
  installment?: PaymentInstallment
}

export interface ProductFeatureValue extends Omit<ProductFeature, 'values'> {}

export interface ProductFeature {
  id?: number
  name?: string
  slug?: string
  image?: nullable<ProductImage>
  values?: nullable<ProductFeatureValue[]>
}

export interface ProductImage {
  id?: number
  productId?: number
  src?: string
  alt?: nullable<string>
  colorIds?: nullable<number[]>
  variationIds?: nullable<number[]>
  position?: number
}

export interface ProductColor {
  id?: number
  name?: string
  slug?: string
  hexadecimal?: string
  image?: nullable<ProductImage>
}

export interface ProductComponentGroup {
  id?: number
  name?: string
  description?: string
  slug?: string
  optional?: boolean
}

export interface ProductComponent extends Pick<Product, 'variations'> {
  productComponentId?: number
  productComponentGroupId?: number
  quantity?: number
  isDefault?: boolean
  isOptional?: boolean
}

export interface ProductAttribute {
  id?: number
  name?: string
  slug?: string
  attributeId?: number
  attributeName?: string
  isActive?: boolean
  position?: number
}

export interface ProductVariation extends Omit<Product, 'variations'> {}

export interface ProductEdge extends PageableEdgeObject<Product> {}

export interface ProductList extends PageableListObject<ProductEdge> {}

export interface FastSearch {
  queryString: string
  fields?: ProductFields[]
}

export interface ProductFilter {
  productId?: number
  slug?: string
}

export interface ProductPaginationFilter extends Pick<PaginationFilter, 'first'> {
  page?: number
  fastSearch?: FastSearch
  sortKey?: ProductSortKey
  reverse?: boolean
  sidebarFilters?: SidebarFilter[]
  customerGroupId?: number
}

export type ProductSortKey = 'relevance' | 'price' | 'createdAt' | 'discount' | 'alphabetical'

export interface OptionsGetProduct {
  fields: ProductFields[]
  filter: ProductFilter
}

export interface Aggregator {
  field: string[]
}
export interface OptionsGetProductList {
  filter: ProductPaginationFilter
  fields?: ProductFields[]
  agg?: Aggregator
}

export interface ProductListFilter extends Omit<ProductPaginationFilter, 'first'> {
  items?: number
}

export type ProductFields =
  | 'id'
  | 'name'
  | 'slug'
  | 'payments'
  | 'gtin'
  | 'mpn'
  | 'additionalShippingTime'
  | 'externalId'
  | 'categoryDefaultId'
  | 'hotsiteId'
  | 'description'
  | 'shortDescription'
  | 'relevance'
  | 'tags'
  | 'minQuantity'
  | 'maxQuantity'
  | 'sellInKitOnly'
  | 'metaTitle'
  | 'metaDescription'
  | 'metaKeywords'
  | 'kit'
  | 'kitMarkup'
  | 'isVirtual'
  | 'isPreSale'
  | 'images'
  | 'video'
  | 'weight'
  | 'depth'
  | 'width'
  | 'height'
  | 'sellOutOfStock'
  | 'additionalTimeOutOfStock'
  | 'balance'
  | 'price'
  | 'minPriceRange'
  | 'maxPriceRange'
  | 'hasPriceRange'
  | 'priceCompare'
  | 'discount'
  | 'billetDiscount'
  | 'paymentsReason'
  | 'warranty'
  | 'model'
  | 'gender'
  | 'ageGroup'
  | 'brand'
  | 'category'
  | 'categories'
  | 'color'
  | 'attribute'
  | 'attributeSecondary'
  | 'features'
  | 'variations'
  | 'components'
  | 'componentGroups'
