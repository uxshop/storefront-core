import { nullable } from '../../types/NullableTypes'

export interface Shop {
  id?: nullable<Number>
  themeId?: nullable<Number>
  termsUserId?: nullable<Number>
  usersCount?: nullable<Number>
  productsCount?: nullable<Number>
  name?: nullable<string>
  slug?: nullable<string>
  doocaDomain?: nullable<string>
  shippingTimeAdditional?: nullable<string>
  shippingTimeAdditionalKit?: nullable<string>
  appendToHead?: nullable<string>
  appendToBody?: nullable<string>
  zipcode?: nullable<string>
  customerRegisterApproves?: nullable<string>
  customerRegisterFor?: nullable<string>
  termsAcceptedAt?: nullable<string>
  createdAt?: nullable<string>
  notifications?: nullable<string>
  scheduleDelivery?: nullable<string>
  active?: nullable<Boolean>
  enableBeta?: nullable<Boolean>
  ssl?: nullable<Boolean>
  redirectTemporary?: nullable<Boolean>
  catalog?: nullable<Boolean>
  checkoutNoteActive?: nullable<Boolean>
  giftWrappingActive?: nullable<Boolean>
  customerRegisterIndividual?: nullable<Boolean>
  customerRegisterCompany?: nullable<Boolean>
  googleConnect?: nullable<Boolean>
  facebookConnect?: nullable<Boolean>
  iderisConnect?: nullable<Boolean>
  updatedAt?: nullable<string>
  industry?: nullable<string>
  phrase?: nullable<string>
  description?: nullable<string>
  keywords?: nullable<string>
  email?: nullable<string>
  emailFrom?: nullable<string>
  domain?: nullable<string>
  shippingRestrictionMessage?: nullable<string>
  policyFooter?: nullable<string>
  company?: nullable<string>
  cgc?: nullable<string>
  city?: nullable<string>
  state?: nullable<string>
  street?: nullable<string>
  number?: nullable<Number>
  detail?: nullable<string>
  district?: nullable<string>
  phone?: nullable<string>
  checkoutNoteLabel?: nullable<string>
  giftWrappingPrice?: nullable<string>
  trackerGoogleAnalytics?: nullable<ShopGoogleAnalytics>
  trackerGoogleConversion?: nullable<ShopGoogleConversion>
  trackerFacebookPixel?: nullable<ShopFacebookPixel>
  organization?: nullable<string>
  suspendedAt?: nullable<string>
  canceledAt?: nullable<string>
  deletedAt?: nullable<string>
  trial?: nullable<string>
  plan?: nullable<ShopPlan>
  checkoutOptions?: string
  betaCheckout?: boolean
  betaAdmin?: boolean
  bagyApps?: string
}

export interface ShopPlan {
  id: number
  planId: number
  lastShopPlanId: number
  name: string
  slug: string
  originalPrice: string
  price: string
  pageviewsLimit: number
  productsLimit: number
  usersLimit: number
  additionalChargeType: string
  additionalChargeValue: string
  freePlan: boolean
  earlyInvoice: boolean
  billingDay: number
  billingFrequency: string
  currentCycle: number
  currentCycleStartsAt: string
  currentCycleEndsAt: string
  active: boolean
  status: string
  suspendedAt: string
  suspendedBy: string
  canceledAt: string
  cancelationReason: string
  changedPlanAt: string
  lastChargedAt: string
  nextChargeAt: string
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
  | 'termsUserId'
  | 'usersCount'
  | 'productsCount'
  | 'name'
  | 'slug'
  | 'doocaDomain'
  | 'shippingTimeAdditional'
  | 'shippingTimeAdditionalKit'
  | 'appendToHead'
  | 'appendToBody'
  | 'zipcode'
  | 'customerRegisterApproves'
  | 'customerRegisterFor'
  | 'termsAcceptedAt'
  | 'createdAt'
  | 'notifications'
  | 'scheduleDelivery'
  | 'active'
  | 'enableBeta'
  | 'ssl'
  | 'redirectTemporary'
  | 'catalog'
  | 'checkoutNoteActive'
  | 'giftWrappingActive'
  | 'customerRegisterIndividual'
  | 'customerRegisterCompany'
  | 'googleConnect'
  | 'facebookConnect'
  | 'iderisConnect'
  | 'updatedAt'
  | 'industry'
  | 'phrase'
  | 'description'
  | 'keywords'
  | 'email'
  | 'emailFrom'
  | 'domain'
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
  | 'suspendedAt'
  | 'canceledAt'
  | 'deletedAt'
  | 'trial'
  | 'plan'
  | 'checkoutOptions'
  | 'betaCheckout'
  | 'betaAdmin'
  | 'bagyApps'

export type ShopPlanFields =
  | 'id'
  | 'planId'
  | 'lastShopPlanId'
  | 'name'
  | 'slug'
  | 'originalPrice'
  | 'price'
  | 'pageviewsLimit'
  | 'productsLimit'
  | 'usersLimit'
  | 'additionalChargeType'
  | 'additionalChargeValue'
  | 'freePlan'
  | 'earlyInvoice'
  | 'billingDay'
  | 'billingFrequency'
  | 'currentCycle'
  | 'currentCycleStartsAt'
  | 'currentCycleEndsAt'
  | 'active'
  | 'status'
  | 'suspendedAt'
  | 'suspendedBy'
  | 'canceledAt'
  | 'cancelationReason'
  | 'changedPlanAt'
  | 'lastChargedAt'
  | 'nextChargeAt'
