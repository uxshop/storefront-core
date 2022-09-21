import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { nullable } from '../../types/NullableTypes'
import { SidebarFilter } from '../sidebar/SidebarTypes'

export interface Product {
  id?: nullable<string>
  name?: nullable<string>
  slug?: nullable<string>
  url?: nullable<string>
  payments?: nullable<Array<ProductPayment>>
  gtin?: nullable<string>
  mpn?: nullable<string>
  additional_shipping_time?: nullable<number>
  external_id?: nullable<string>
  category_default_id?: nullable<number>
  hotsite_id?: nullable<number>
  description?: nullable<string>
  short_description?: nullable<string>
  relevance?: nullable<number>
  tags?: nullable<string>
  min_quantity?: nullable<number>
  max_quantity?: nullable<number>
  sell_in_kit_only?: nullable<boolean>
  meta_title?: nullable<string>
  meta_description?: nullable<string>
  meta_keywords?: nullable<string>
  kit?: nullable<boolean>
  kit_markup?: nullable<number>
  is_virtual?: nullable<boolean>
  is_pre_sale?: nullable<boolean>
  video?: nullable<string>
  weight?: nullable<number>
  depth?: nullable<number>
  width?: nullable<number>
  height?: nullable<number>
  sell_out_of_stock?: nullable<boolean>
  additional_time_out_of_stock?: nullable<number>
  balance?: nullable<number>
  price?: nullable<number>
  min_price_range?: nullable<number>
  max_price_range?: nullable<number>
  has_price_range?: nullable<boolean>
  price_compare?: nullable<number>
  discount?: nullable<number>
  billet_discount?: nullable<number>
  payments_reason?: nullable<string>
  warranty?: nullable<string>
  model?: nullable<string>
  gender?: nullable<string>
  age_group?: nullable<string>
  brand?: nullable<ProductBrand>
  category?: nullable<ProductCategory>
  categories?: nullable<Array<ProductCategory>>
  color?: nullable<ProductColor>
  attribute?: nullable<ProductAttribute>
  attribute_secondary?: nullable<ProductAttribute>
  features?: nullable<Array<ProductFeature>>
  product_id?: nullable<number>
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
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  description?: nullable<string>
  short_description?: nullable<string>
  image?: nullable<ProductImage>
  banner?: nullable<ProductImage>
  url?: nullable<string>
}

export interface ProductCategory {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  description?: nullable<string>
  image?: nullable<ProductImage>
  breadcrumb?: nullable<string>
  google_taxonomy_id?: nullable<string>
  url?: nullable<string>
}

export interface ProductPayment {
  name?: nullable<string>
  method?: nullable<string>
  discount?: nullable<number>
  parcels?: nullable<number>
  total?: nullable<number>
  parcel_price?: nullable<number>
  has_interest?: nullable<boolean>
}

export interface ProductFeatureValue extends Omit<ProductFeature, 'values'> {}

export interface ProductFeature {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  image?: nullable<ProductImage>
  values?: nullable<Array<ProductFeatureValue>>
}

export interface ProductImage {
  src?: nullable<string>
  alt?: nullable<string>
}

export interface ProductColorImage extends ProductImage {
  color_ids?: nullable<number>
}

export interface ProductColor {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  hexadecimal?: nullable<string>
  image?: nullable<ProductImage>
  product_images?: nullable<Array<ProductColorImage>>
}

export interface ProductComponentGroup {
  id?: nullable<number>
  shop_id?: nullable<number>
  name?: nullable<string>
  description?: nullable<string>
  slug?: nullable<string>
  optional?: nullable<boolean>
}

export interface ProductComponent extends Omit<Product, 'id' | 'components'> {
  id?: nullable<number>
  product_component_id?: nullable<number>
  product_component_group_id?: nullable<number>
  quantity?: nullable<number>
  default?: nullable<boolean>
  optional?: nullable<boolean>
  product_id?: nullable<number>
}

export interface ProductAttributeValue extends Omit<ProductAttribute, 'values'> {}

export interface ProductAttribute {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  values?: nullable<Array<ProductAttributeValue>>
}

export interface ProductVariation {
  id?: nullable<number>
  product_id?: nullable<number>
  price?: nullable<number>
  slug?: nullable<string>
  price_compare?: nullable<number>
  gtin?: nullable<string>
  mpn?: nullable<string>
  additional_shipping_time?: nullable<number>
  images?: nullable<Array<ProductImage>>
  balance?: nullable<number>
  color?: nullable<ProductColor>
  attribute?: nullable<ProductAttribute>
  attribute_secondary?: nullable<ProductAttribute>
}

export interface ProductEdge extends PageableEdgeObject<Product> {}

export interface ProductList extends PageableListObject<ProductEdge> {}

export interface FastSearch {
  queryString: nullable<string>
  fields?: nullable<Array<ProductFields>>
}

export interface ProductFilter {
  productId?: nullable<number>
  slug?: nullable<string>
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
