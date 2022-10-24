import { nullable } from '../../types/NullableTypes'

export interface Newsletter {
  email?: string
  name?: nullable<string>
  gender?: nullable<string>
  created_at?: nullable<string>
}

export interface NewsletterResponse {
  sendMailing: Newsletter
}

export interface NewsletterInput {
  email: string
  name?: string
  gender?: string
  birthday?: string
  phone?: string
}

export type NewsletterFields = 'name' | 'email' | 'gender' | 'created_at'
