import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { nullable } from '../../types/NullableTypes'
import { SidebarFilter } from '../sidebar/SidebarTypes'

export interface Product {
  id?: string
  name?: string
  slug?: string
  url?: string
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
  sellInKitOnly?: nullable<boolean>
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
  kit?: nullable<boolean>
  kitmarkup?: number
  isVirtual?: boolean
  isPreSale?: boolean
  video?: string
  images?: ProductImage[]
  weight?: number
  depth?: number
  width?: number
  height?: number
  sellOutOfStock?: nullable<boolean>
  additionalTimeOutOfStock?: number
  balance?: number
  price?: number
  minPriceRange?: number
  maxPriceRange?: number
  hasPriceRange?: nullable<boolean>
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
}

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
  url?: string
}

export interface ProductCategory {
  id?: number
  name?: string
  slug?: string
  description?: string
  image?: nullable<ProductImage>
  breadcrumb?: string
  googleTaxonomyId?: string
  url?: string
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
  gateway_id?: number
  external_id?: number
  name?: string
  method?: string
  external?: string
  max_parcels?: number
  parcels_no_interest?: number
  installments?: PaymentInstallment[]
  min_parcel_price?: string
  min_purchase?: string
  max_purchase?: string
  expire_days?: number
  soft_descriptor?: string
  description?: string
  isActive?: boolean
  position?: number
  billet_min_discount_price?: string
  markup?: string
  instructions?: string
  is_default?: boolean
  isShowOnlyInstoreShipping?: boolean
  created_at?: string
  updated_at?: string
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
  src?: string
  alt?: string
}

export interface ProductColorImage extends ProductImage {
  colorIds?: number
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
  shopId?: number
  name?: string
  description?: string
  slug?: string
  optional?: nullable<boolean>
}

export interface ProductComponent extends Omit<Product, 'id' | 'components'> {
  id?: number
  productComponentId?: number
  productComponentGroupId?: number
  quantity?: number
  default?: nullable<boolean>
  optional?: nullable<boolean>
  product_id?: number
}

export interface ProductAttribute {
  id?: number
  name?: string
  slug?: string
  attributeId?: number
  attributeName?: string
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
  sidebarFilters?: SidebarFilter[]
  customerGroupId?: number
}

export interface OptionsGetProduct {
  fields: ProductFields[]
  filter: ProductFilter
}

export interface Aggregator {
  field: string
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
  | 'url'
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
