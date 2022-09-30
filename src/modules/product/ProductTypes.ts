import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { nullable } from '../../types/NullableTypes'
import { SidebarFilter } from '../sidebar/SidebarTypes'

export interface Product {
  id?: string
  name?: string
  slug?: string
  url?: string
  payments?: nullable<Array<ProductPayment>>
  gtin?: string
  mpn?: string
  additional_shipping_time?: number
  external_id?: string
  category_default_id?: number
  hotsite_id?: number
  description?: string
  short_description?: string
  relevance?: number
  tags?: string
  min_quantity?: number
  max_quantity?: number
  sell_in_kit_only?: nullable<boolean>
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  kit?: nullable<boolean>
  kit_markup?: number
  is_virtual?: nullable<boolean>
  is_pre_sale?: nullable<boolean>
  video?: string
  images?: Array<ProductImage>
  product_images?: Array<ProductImage>
  weight?: number
  depth?: number
  width?: number
  height?: number
  sell_out_of_stock?: nullable<boolean>
  additional_time_out_of_stock?: number
  balance?: number
  price?: number
  min_price_range?: number
  max_price_range?: number
  has_price_range?: nullable<boolean>
  price_compare?: number
  discount?: number
  billet_discount?: number
  payments_reason?: string
  warranty?: string
  model?: string
  gender?: string
  age_group?: string
  brand?: nullable<ProductBrand>
  category?: nullable<ProductCategory>
  categories?: nullable<Array<ProductCategory>>
  color?: nullable<ProductColor>
  attribute?: nullable<ProductAttribute>
  attribute_secondary?: nullable<ProductAttribute>
  features?: nullable<Array<ProductFeature>>
  product_id?: number
  variations?: nullable<Array<ProductVariation>>
  components?: nullable<Array<ProductComponent>>
  component_groups?: nullable<Array<ProductComponentGroup>>
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
  short_description?: string
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
  google_taxonomy_id?: string
  url?: string
}

interface PaymentInstallment {
  markup?: number
  parcel?: number
  discount?: number
  interest?: number
  total?: string
  parcel_price?: string
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
  installments?: Array<PaymentInstallment>
  min_parcel_price?: string
  min_purchase?: string
  max_purchase?: string
  expire_days?: number
  soft_descriptor?: string
  description?: string
  active?: boolean
  position?: number
  billet_min_discount_price?: string
  markup?: string
  instructions?: string
  is_default?: boolean
  show_only_instore_shipping?: boolean
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
  values?: nullable<Array<ProductFeatureValue>>
}

export interface ProductImage {
  src?: string
  alt?: string
}

export interface ProductColorImage extends ProductImage {
  color_ids?: number
}

export interface ProductColor {
  id?: number
  name?: string
  slug?: string
  hexadecimal?: string
  image?: nullable<ProductImage>
  product_images?: nullable<Array<ProductColorImage>>
}

export interface ProductComponentGroup {
  id?: number
  shop_id?: number
  name?: string
  description?: string
  slug?: string
  optional?: nullable<boolean>
}

export interface ProductComponent extends Omit<Product, 'id' | 'components'> {
  id?: number
  product_component_id?: number
  product_component_group_id?: number
  quantity?: number
  default?: nullable<boolean>
  optional?: nullable<boolean>
  product_id?: number
}

export interface ProductAttribute {
  id?: number
  name?: string
  slug?: string
  attribute_id?: number
  attribute_name?: string
}

export interface ProductVariation extends Omit<Product, 'variations'> {}

export interface ProductEdge extends PageableEdgeObject<Product> {}

export interface ProductList extends PageableListObject<ProductEdge> {}

export interface FastSearch {
  queryString: string
  fields?: nullable<Array<ProductFields>>
}

export interface ProductFilter {
  productId?: number
  slug?: string
}

export interface ProductPaginationFilter extends Pick<PaginationFilter, 'first'> {
  page?: number
  fastSearch?: nullable<FastSearch>
  sidebarFilters?: Array<SidebarFilter>
  categoryId?: number
  categorySlug?: string
  brandId?: number
  brandSlug?: string
}

export interface OptionsGetProduct {
  fields: nullable<Array<ProductFields>>
  filter: ProductFilter
}

export interface Aggregator {
  field: string
}
export interface OptionsGetProductList {
  filter: ProductPaginationFilter
  fields?: nullable<Array<ProductFields>>
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
  | 'additional_shipping_time'
  | 'external_id'
  | 'category_default_id'
  | 'hotsite_id'
  | 'description'
  | 'short_description'
  | 'relevance'
  | 'tags'
  | 'min_quantity'
  | 'max_quantity'
  | 'sell_in_kit_only'
  | 'meta_title'
  | 'meta_description'
  | 'meta_keywords'
  | 'kit'
  | 'kit_markup'
  | 'is_virtual'
  | 'is_pre_sale'
  | 'images'
  | 'video'
  | 'weight'
  | 'depth'
  | 'width'
  | 'height'
  | 'sell_out_of_stock'
  | 'additional_time_out_of_stock'
  | 'balance'
  | 'price'
  | 'min_price_range'
  | 'max_price_range'
  | 'has_price_range'
  | 'price_compare'
  | 'discount'
  | 'billet_discount'
  | 'payments_reason'
  | 'warranty'
  | 'model'
  | 'gender'
  | 'age_group'
  | 'brand'
  | 'category'
  | 'categories'
  | 'color'
  | 'attribute'
  | 'attribute_secondary'
  | 'features'
  | 'variations'
  | 'components'
  | 'component_groups'
