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
  url?: nullable<string>
  active?: nullable<boolean>
  createdAt?: nullable<string>
  updatedAt?: nullable<string>
  faq?: nullable<Array<FAQ>>
}

export interface FAQ {
  active?: nullable<boolean>
  answer?: nullable<string>
  question?: nullable<string>
}
