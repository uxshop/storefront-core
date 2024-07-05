export type LiveShopFields =
  | 'id'
  | 'hashRoom'
  | 'name'
  | 'status'
  | 'urlLive'
  | 'title'
  | 'banner'
  | 'products'
  | 'messages'
  | 'alertVisible'
  | 'chatVisible'
  | 'isActive'
  | 'createdAt'
  | 'updatedAt'

export interface LiveShopFilter {
  id?: number
  hash?: string
  slug?: string
}
export interface LiveShopImage {
  src: string
  alt: string
}

export interface LiveShopDiscount {
  type: string
  value: number
}

export interface LiveShopMessage {
  title: string
  content: string
}

export interface LiveShopVariation {
  id: number
  discount: LiveShopDiscount
}
export interface LiveShopProduct {
  id: number
  discount: LiveShopDiscount
  variations: LiveShopVariation[]
}

export interface LiveShop {
  id: number
  hashRoom: string
  name: string
  status: 'inLive' | 'finished' | 'warmup' | string
  urlLive: string
  title: string
  banner: LiveShopImage
  products: LiveShopProduct[]
  messages: LiveShopMessage[]
  alertVisible: boolean
  chatVisible: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
}
export interface LiveShopResponse {
  liveShop: LiveShop
}