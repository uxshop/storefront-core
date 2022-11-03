import { nullable } from '../../types/NullableTypes'

export interface Freight {
  id?: string
  name?: string
  alias?: string
  api?: string
  image: nullable<string>
  price?: number
  priceCost?: number
  additionalMessage?: nullable<string>
  insurance?: number
  insurancePrice?: number
  shipmentTime?: number
  deliveryTime?: number
  hasLowerPrice?: number
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
  | 'priceCost'
  | 'additionalMessage'
  | 'insurance'
  | 'insurancePrice'
  | 'shipmentTime'
  | 'deliveryTime'
  | 'hasLowerPrice'
