import { nullable } from '../NullableTypes'

export interface Attribute {
  id: number
  name: string
  slug: string
  values: nullable<AttributeValue[]>
  active?: nullable<boolean>
  externalId?: nullable<string>
}

export interface AttributeValue {
  id: number
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  attributeId?: nullable<number>
  externalId?: nullable<string>
  position?: nullable<number>
  active?: nullable<boolean>
}
