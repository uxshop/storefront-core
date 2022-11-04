import { nullable } from './NullableTypes'

export interface Page {
  id: number
  slug: string
  template: string
  name?: nullable<string>
  description?: nullable<string>
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  metaKeywords?: nullable<string>
  isActive?: boolean
  createdAt?: string
  updatedAt?: string
  faq?: nullable<FAQ[]>
}

export interface FAQ {
  answer?: string
  question?: string
}
