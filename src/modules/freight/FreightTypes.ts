import { nullable } from '../../types/NullableTypes'

export interface Freight {
  id?: string
  name?: string
  alias?: string
  api?: string
  image: nullable<string>
  price?: number
  price_cost?: number
  additional_message?: nullable<string>
  insurance?: number
  insurance_price?: number
  shipment_time?: number
  delivery_time?: number
  has_lower_price?: number
}

export interface FreightResponse {
  freights: Freight[]
}

export interface ShippingComponent {
  variationId?: number
  componentId?: number
}

export interface Shipping {
  variationId: number
  zipCode: string
  components?: ShippingComponent[]
}

export interface OptionsGetFreight {
  fields: nullable<FreightFields[]>
  filter: Shipping
}

export type FreightFields =
  | 'id'
  | 'name'
  | 'alias'
  | 'api'
  | 'image'
  | 'price'
  | 'price_cost'
  | 'additional_message'
  | 'insurance'
  | 'insurance_price'
  | 'shipment_time'
  | 'delivery_time'
  | 'has_lower_price'
