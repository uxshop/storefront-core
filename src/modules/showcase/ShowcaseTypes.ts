import { PageableEdgeObject, PageableListObject, PaginationFilter } from '../../types/PaginationTypes'
import { nullable } from '../../types/NullableTypes'

export interface Showcase {
  id?: nullable<string>
  name?: nullable<string>
  slug?: nullable<string>
  url?: nullable<string>
  payments?: nullable<Array<ShowcasePayment>>
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
  images?: nullable<Array<ShowcaseImage>>
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
  brand?: nullable<ShowcaseBrand>
  category?: nullable<ShowcaseCategory>
  categories?: nullable<Array<ShowcaseCategory>>
  color?: nullable<ShowcaseColor>
  colors?: nullable<Array<ShowcaseColor>>
  attribute?: nullable<ShowcaseAttribute>
  attribute_secondary?: nullable<ShowcaseAttribute>
  features?: nullable<Array<ShowcaseFeature>>
  product_id?: nullable<number>
  variations?: nullable<Array<ShowcaseVariation>>
  components?: nullable<Array<ShowcaseComponent>>
  component_groups?: nullable<Array<ShowcaseComponentGroup>>
}

export interface ShowcaseResponse {
  showcase: nullable<Showcase>
}

export interface ShowcaseListResponse {
  showcases: nullable<ShowcaseList>
}

export interface ShowcaseBrand {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  description?: nullable<string>
  short_description?: nullable<string>
  image?: nullable<ShowcaseImage>
  banner?: nullable<ShowcaseImage>
  url?: nullable<string>
}

export interface ShowcaseCategory {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  description?: nullable<string>
  image?: nullable<ShowcaseImage>
  breadcrumb?: nullable<string>
  google_taxonomy_id?: nullable<string>
  url?: nullable<string>
}

export interface ShowcasePayment {
  name?: nullable<string>
  method?: nullable<string>
  discount?: nullable<number>
  parcels?: nullable<number>
  total?: nullable<number>
  parcel_price?: nullable<number>
  has_interest?: nullable<boolean>
}

export interface ShowcaseFeatureValue extends Omit<ShowcaseFeature, 'values'> {}

export interface ShowcaseFeature {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  image?: nullable<ShowcaseImage>
  values?: nullable<Array<ShowcaseFeatureValue>>
}

export interface ShowcaseImage {
  src?: nullable<string>
  alt?: nullable<string>
}

export interface ShowcaseProductImage extends ShowcaseImage {
  color_ids?: nullable<number>
}

export interface ShowcaseColor {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  hexadecimal?: nullable<string>
  image?: nullable<ShowcaseImage>
  product_images?: nullable<Array<ShowcaseProductImage>>
}

export interface ShowcaseComponentGroup {
  id?: nullable<number>
  shop_id?: nullable<number>
  name?: nullable<string>
  description?: nullable<string>
  slug?: nullable<string>
  optional?: nullable<boolean>
}

export interface ShowcaseComponent extends Omit<Showcase, 'id' | 'components' | 'variation_id'> {
  id?: nullable<number>
  product_component_id?: nullable<number>
  product_component_group_id?: nullable<number>
  quantity?: nullable<number>
  default?: nullable<boolean>
  optional?: nullable<boolean>
  product_id?: nullable<number>
}

export interface ShowcaseAttributeValue extends Omit<ShowcaseAttribute, 'values'> {}

export interface ShowcaseAttribute {
  id?: nullable<number>
  name?: nullable<string>
  slug?: nullable<string>
  values?: nullable<Array<ShowcaseAttributeValue>>
}

export interface ShowcaseVariation {
  id?: nullable<number>
  product_id?: nullable<number>
  price?: nullable<number>
  color_id?: nullable<number>
  color_secondary_id?: nullable<number>
  attribute_value_id?: nullable<number>
  attribute_value_secondary_id?: nullable<number>
  reference?: nullable<string>
  slug?: nullable<string>
  price_compare?: nullable<number>
  sku?: nullable<string>
  gtin?: nullable<string>
  mpn?: nullable<string>
  additional_shipping_time?: nullable<number>
  images?: nullable<Array<ShowcaseImage>>
  balance?: nullable<number>
  selling_out_of_stock?: nullable<boolean>
  color?: nullable<ShowcaseColor>
  attribute?: nullable<ShowcaseAttribute>
  attribute_secondary?: nullable<ShowcaseAttribute>
}

export interface ShowcaseEdge extends PageableEdgeObject<Showcase> {}

export interface ShowcaseList extends PageableListObject<ShowcaseEdge> {}

export interface FastSearch {
  queryString: nullable<string>
  fields?: nullable<Array<ShowcaseFields>>
}

export interface ShowcaseFilter {
  id?: nullable<number>
  slug?: nullable<string>
  fastSearch?: nullable<FastSearch>
}

export interface ShowcasePaginationFilter extends Pick<PaginationFilter, 'first'> {
  page?: Number
  queryString?: string
}

export interface OptionsGetShowcase {
  fields: nullable<Array<ShowcaseFields>>
  filter: ShowcaseFilter
}

export interface OptionsGetShowcaseList {
  fields: nullable<Array<ShowcaseFields>>
  filter: ShowcasePaginationFilter
}

export type ShowcaseFields =
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
  | 'colors'
  | 'attribute'
  | 'attribute_secondary'
  | 'features'
  | 'variation_id'
  | 'variations'
  | 'components'
  | 'component_groups'
