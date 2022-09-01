import { nullable } from '../../types/NullableTypes'

export interface Shop {
  shop_id?: nullable<Number>
  theme_id?: nullable<Number>
  terms_user_id?: nullable<Number>
  users_count?: nullable<Number>
  products_count?: nullable<Number>
  name?: nullable<string>
  slug?: nullable<string>
  dooca_domain?: nullable<string>
  shipping_time_additional?: nullable<string>
  shipping_time_additional_kit?: nullable<string>
  append_to_head?: nullable<string>
  append_to_body?: nullable<string>
  zipcode?: nullable<string>
  customer_register_approves?: nullable<string>
  customer_registerFor?: nullable<string>
  terms_accepted_at?: nullable<string>
  created_at?: nullable<string>
  notifications?: nullable<string>
  schedule_delivery?: nullable<string>
  active?: nullable<Boolean>
  enable_beta?: nullable<Boolean>
  ssl?: nullable<Boolean>
  redirect_temporary?: nullable<Boolean>
  catalog?: nullable<Boolean>
  checkout_note_active?: nullable<Boolean>
  gift_wrapping_active?: nullable<Boolean>
  customer_register_individual?: nullable<Boolean>
  customer_register_company?: nullable<Boolean>
  google_connect?: nullable<Boolean>
  facebook_connect?: nullable<Boolean>
  ideris_connect?: nullable<Boolean>
  updated_at?: nullable<string>
  industry?: nullable<string>
  phrase?: nullable<string>
  description?: nullable<string>
  keywords?: nullable<string>
  email?: nullable<string>
  email_from?: nullable<string>
  domain?: nullable<string>
  shipping_restriction_message?: nullable<string>
  policy_footer?: nullable<string>
  company?: nullable<string>
  cgc?: nullable<string>
  city?: nullable<string>
  state?: nullable<string>
  street?: nullable<string>
  number?: nullable<Number>
  detail?: nullable<string>
  district?: nullable<string>
  phone?: nullable<string>
  checkout_note_label?: nullable<string>
  gift_wrapping_price?: nullable<string>
  tracker_google_analytics?: nullable<ShopGoogleAnalytics>
  tracker_google_conversion?: nullable<ShopGoogleConversion>
  tracker_facebook_pixel?: nullable<ShopFacebookPixel>
  organization?: nullable<string>
  suspended_at?: nullable<string>
  canceled_at?: nullable<string>
  deleted_at?: nullable<string>
  trial?: nullable<string>
  plan?: nullable<string>
}

export interface ShopGoogleAnalytics {
  id: string
}

export interface ShopGoogleConversion {
  id: string
  label: string
}

export interface ShopFacebookPixel {
  id: string
}

export interface ShopResponse {
  shop: Shop
}

export type ShopFields =
  | 'shop_id'
  | 'theme_id'
  | 'terms_user_id'
  | 'users_count'
  | 'products_count'
  | 'name'
  | 'slug'
  | 'dooca_domain'
  | 'shipping_time_additional'
  | 'shipping_time_additional_kit'
  | 'append_to_head'
  | 'append_to_body'
  | 'zipcode'
  | 'customer_register_approves'
  | 'customer_registerFor'
  | 'terms_accepted_at'
  | 'created_at'
  | 'notifications'
  | 'schedule_delivery'
  | 'active'
  | 'enable_beta'
  | 'ssl'
  | 'redirect_temporary'
  | 'catalog'
  | 'checkout_note_active'
  | 'gift_wrapping_active'
  | 'customer_register_individual'
  | 'customer_register_company'
  | 'google_connect'
  | 'facebook_connect'
  | 'ideris_connect'
  | 'updated_at'
  | 'industry'
  | 'phrase'
  | 'description'
  | 'keywords'
  | 'email'
  | 'email_from'
  | 'domain'
  | 'shipping_restriction_message'
  | 'policy_footer'
  | 'company'
  | 'cgc'
  | 'city'
  | 'state'
  | 'street'
  | 'Int'
  | 'detail'
  | 'district'
  | 'phone'
  | 'checkout_note_label'
  | 'gift_wrapping_price'
  | 'tracker_google_analytics'
  | 'tracker_google_conversion'
  | 'tracker_facebook_pixel'
  | 'organization'
  | 'suspended_at'
  | 'canceled_at'
  | 'deleted_at'
  | 'trial'
  | 'plan'
