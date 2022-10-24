import { nullable } from '../../types/NullableTypes'

export interface Shop {
  id?: number
  theme_id?: number
  name?: string
  slug?: string
  domain?: string
  domain_temporary?: string
  shipping_time_additional?: string
  shipping_time_additional_kit?: string
  append_to_head?: string
  append_to_body?: string
  zipcode?: string
  customer_register_approves?: string
  customer_registerFor?: string
  schedule_delivery?: string
  active?: string
  ssl?: string
  redirect_temporary?: string
  catalog?: boolean
  customer_register_individual?: boolean
  customer_register_company?: boolean
  google_connect?: boolean
  facebook_connect?: boolean
  industry?: string
  phrase?: string
  description?: string
  keywords?: string
  email?: string
  email_from?: string
  shipping_restriction_message?: string
  policy_footer?: string
  company?: string
  cgc?: string
  city?: string
  state?: string
  street?: string
  number?: string
  detail?: string
  district?: string
  phone?: string
  checkout_note_label?: nullable<string>
  gift_wrapping_price?: nullable<string>
  tracker_google_analytics?: nullable<ShopGoogleAnalytics>
  tracker_google_conversion?: nullable<ShopGoogleConversion>
  tracker_facebook_pixel?: nullable<ShopFacebookPixel>
  organization?: string
  checkout_note_active?: string
  checkout_options?: string
  beta_checkout?: boolean
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
  token: string
}

export interface ShopResponse {
  shop: Shop
}

export type ShopFields =
  | 'id'
  | 'theme_id'
  | 'name'
  | 'slug'
  | 'domain'
  | 'domain_temporary'
  | 'shipping_time_additional'
  | 'shipping_time_additional_kit'
  | 'append_to_head'
  | 'append_to_body'
  | 'zipcode'
  | 'customer_register_approves'
  | 'customer_registerFor'
  | 'schedule_delivery'
  | 'active'
  | 'ssl'
  | 'redirect_temporary'
  | 'catalog'
  | 'checkout_note_active'
  | 'gift_wrapping_active'
  | 'customer_register_individual'
  | 'customer_register_company'
  | 'google_connect'
  | 'facebook_connect'
  | 'industry'
  | 'phrase'
  | 'description'
  | 'keywords'
  | 'email'
  | 'email_from'
  | 'shipping_restriction_message'
  | 'policy_footer'
  | 'company'
  | 'cgc'
  | 'city'
  | 'state'
  | 'street'
  | 'number'
  | 'detail'
  | 'district'
  | 'phone'
  | 'checkout_note_label'
  | 'gift_wrapping_price'
  | 'tracker_google_analytics'
  | 'tracker_google_conversion'
  | 'tracker_facebook_pixel'
  | 'organization'
  | 'checkout_options'
  | 'beta_checkout'
