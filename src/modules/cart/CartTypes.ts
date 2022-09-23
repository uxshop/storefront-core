import { Image } from '../../types/ImageTypes'
import { nullable } from '../../types/NullableTypes'

export interface Cart {
  id?: string
  token?: string
  customer?: nullable<CustomerCart>
  address?: nullable<CartAddress>
  coupon?: nullable<string>
  shipping_token?: nullable<string>
  payment_token?: nullable<string>
  creditcard?: nullable<CartCreditCard>
  items?: Array<CartItem>
}

export interface CustomerCart {
  email?: string
  doc?: string
  newsletter?: boolean
  first_name?: string
  last_name?: string
  name?: string
  phone?: string
}

export interface CartAddress {
  receiver?: nullable<string>
  zipcode?: nullable<string>
  street?: nullable<string>
  Int?: nullable<string>
  detail?: nullable<string>
  district?: nullable<string>
  city?: nullable<string>
  state?: nullable<string>
}

export interface CartCreditCard {
  cvv?: nullable<string>
  exp?: nullable<string>
  name?: nullable<string>
  Int?: nullable<string>
}

export interface CartItem {
  id
  name?: nullable<string>
  variation?: nullable<string>
  is_virtual?: nullable<Boolean>
  quantity?: nullable<number>
  allowed_gift_wrapping?: nullable<Boolean>
  total_cost?: nullable<number>
  total?: nullable<number>
  price?: nullable<number>
  price_cost?: nullable<number>
  stock_balance?: nullable<number>
  can_sell_out_of_stock?: nullable<Boolean>
  variation_id?: nullable<number>
  additional_price?: nullable<number>
  price_gift_wrapping?: nullable<number>
  allowed_gift_wrapping_price?: nullable<number>
  discount?: nullable<number>
  price_compare?: nullable<number>
  image?: nullable<Image>
  customize?: nullable<CustomizationsItem>
  components?: nullable<ComponentItem>
}

export interface CustomizationsItem {
  id?: nullable<number>
  name?: nullable<string>
  content?: nullable<CustomizeContent>
}

export interface CustomizeContent {
  id?: nullable<number>
  field?: nullable<string>
  value?: nullable<string>
  price?: nullable<number>
}

export interface ComponentItem {
  variation_id?: nullable<number>
  component_id?: nullable<number>
}

interface MutationInput {
  cartToken?: String
}

export interface AddItemInput extends MutationInput {
  items: Array<CartItemAddInput>
}

export interface UpdateItemInput extends MutationInput {
  item: CartItemUpdateInput
}

export interface CartItemDeleteInput {
  id: nullable<number>
}

export interface DeleteItemInput extends MutationInput {
  item: CartItemDeleteInput
}

export interface CleanCartInput extends MutationInput {
  items: Array<CartItemDeleteInput>
}

export interface CartItemAddInput {
  variation_id: nullable<number>
  quantity: nullable<number>
  cartToken?: nullable<string>
  zipcode?: nullable<number>
  customize?: CustomizationsItemInput
  components?: ComponentItemInput
}

export interface CartItemUpdateInput {
  id: nullable<number>
  quantity: nullable<number>
  customize?: CustomizationsItemInput
}

export interface ComponentItemInput {
  variation_id?: nullable<number>
  component_id?: nullable<number>
}

export interface CustomizationsItemInput {
  id?: nullable<number>
  name?: nullable<string>
  content: CustomizationContentInput
}

export interface CustomizationContentInput {
  id?: nullable<number>
  field?: nullable<string>
  value?: nullable<string>
  price?: nullable<number>
}

interface OptionsCartMutation<T> {
  fields: nullable<Array<CartFields>>
  input: T
}

export interface OptionsAddItemCart extends OptionsCartMutation<AddItemInput> {}

export interface OptionsUpdateItemCart extends OptionsCartMutation<UpdateItemInput> {}

export interface OptionsDeleteItemCart extends OptionsCartMutation<DeleteItemInput> {}

export interface OptionsCleanCart extends OptionsCartMutation<CleanCartInput> {}

export interface OptionsGetCart {
  fields: nullable<Array<CartFields>>
  filter: CartFilter
}

export interface CartFilter {
  cart_token: String
}

export interface AddItemResponse {
  addItem: Cart
}

export interface UpdateItemResponse {
  updateItem: Cart
}

export interface DeleteItemResponse {
  deleteItem: Cart
}

export interface CleanCartResponse {
  cleanCart: Cart
}

export interface GetCartResponse {
  cart: Cart
}

export type CartFields =
  | 'id'
  | 'token'
  | 'customer'
  | 'address'
  | 'coupon'
  | 'shipping_token'
  | 'payment_token'
  | 'creditcard'
  | 'items'

export type CartCreditCartFields = 'cvv' | 'exp' | 'name' | 'Int'

export type CustomerCartField = 'email' | 'doc' | 'newsletter' | 'first_name' | 'last_name' | 'name' | 'phone'

export type AdressCartFields = 'receiver' | 'zipcode' | 'street' | 'Int' | 'detail' | 'district' | 'city' | 'state'

export type CartItemFields =
  | 'id'
  | 'name'
  | 'variation'
  | 'is_virtual'
  | 'quantity'
  | 'allowed_gift_wrapping'
  | 'total_cost'
  | 'total'
  | 'price'
  | 'price_cost'
  | 'stock_balance'
  | 'can_sell_out_of_stock'
  | 'variation_id'
  | 'additional_price'
  | 'price_gift_wrapping'
  | 'allowed_gift_wrapping_price'
  | 'discount'
  | 'price_compare'
  | 'image'
  | 'customize'
  | 'components'

export type ComponentFields = 'variation_id' | 'component_id'

export type CustomizeFields = 'id' | 'name' | 'content'

export type ContentFields = 'id' | 'field' | 'value' | 'price'
