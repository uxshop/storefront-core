import { nullable } from './NullableTypes'

export interface Page {
  id: number
  slug: string
  template: string
  name?: nullable<string>
  description?: nullable<string>
  meta_title?: nullable<string>
  meta_description?: nullable<string>
  meta_keywords?: nullable<string>
  url?: nullable<string>
  active?: nullable<boolean>
  created_at?: nullable<string>
  updated_at?: nullable<string>
  faq?: nullable<Array<FAQ>>
}

export interface FAQ {
  active?: nullable<boolean>
  answer?: nullable<string>
  question?: nullable<string>
}
