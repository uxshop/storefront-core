import { nullable } from '../../types/HelpersTypes'

export interface Newsletter {
  email?: string
  name?: nullable<string>
  gender?: nullable<string>
  createdAt?: nullable<string>
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

export type NewsletterFields = 'name' | 'email' | 'gender' | 'createdAt'
