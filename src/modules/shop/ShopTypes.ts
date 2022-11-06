import { nullable } from '../../types/HelpersTypes'

export interface Shop {
  id?: number
  themeId?: number
  name?: string
  slug?: string
  domain?: string
  domainTemporary?: string
  shippingTimeAdditional?: string
  shippingTimeAdditionalKit?: string
  appendToHead?: string
  appendToBody?: string
  zipcode?: string
  customerRegisterApproves?: string
  customerRegisterFor?: string
  scheduleDelivery?: string
  isActive?: string
  isSsl?: string
  isRedirectTemporary?: string
  isCatalog?: boolean
  isCustomerRegisterIndividual?: boolean
  isCustomerRegisterCompany?: boolean
  isGoogleConnect?: boolean
  isFacebookConnect?: boolean
  industry?: string
  phrase?: string
  description?: string
  keywords?: string
  email?: string
  emailFrom?: string
  shippingRestrictionMessage?: string
  policyFooter?: string
  company?: string
  cgc?: string
  city?: string
  state?: string
  street?: string
  number?: string
  detail?: string
  district?: string
  phone?: string
  checkoutNoteLabel?: nullable<string>
  giftWrappingPrice?: nullable<string>
  trackerGoogleAnalytics?: nullable<ShopGoogleAnalytics>
  trackerGoogleConversion?: nullable<ShopGoogleConversion>
  trackerFacebookPixel?: nullable<ShopFacebookPixel>
  organization?: string
  checkoutNoteActive?: string
  checkoutOptions?: string
  isBetaCheckout?: boolean
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
  | 'themeId'
  | 'name'
  | 'slug'
  | 'domain'
  | 'domainTemporary'
  | 'shippingTimeAdditional'
  | 'shippingTimeAdditionalKit'
  | 'appendToHead'
  | 'appendToBody'
  | 'zipcode'
  | 'customerRegisterApproves'
  | 'customerRegisterFor'
  | 'scheduleDelivery'
  | 'isActive'
  | 'isSsl'
  | 'isRedirectTemporary'
  | 'isCatalog'
  | 'isCheckoutNoteActive'
  | 'isGiftWrappingActive'
  | 'isCustomerRegisterIndividual'
  | 'isCustomerRegisterCompany'
  | 'isGoogleConnect'
  | 'isFacebookConnect'
  | 'industry'
  | 'phrase'
  | 'description'
  | 'keywords'
  | 'email'
  | 'emailFrom'
  | 'shippingRestrictionMessage'
  | 'policyFooter'
  | 'company'
  | 'cgc'
  | 'city'
  | 'state'
  | 'street'
  | 'number'
  | 'detail'
  | 'district'
  | 'phone'
  | 'checkoutNoteLabel'
  | 'giftWrappingPrice'
  | 'trackerGoogleAnalytics'
  | 'trackerGoogleConversion'
  | 'trackerFacebookPixel'
  | 'organization'
  | 'checkoutOptions'
  | 'isBetaCheckout'
