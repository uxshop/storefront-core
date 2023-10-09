export type nullable<T> = T | null

export interface ErrorResponse {
  error: any
  data?: any
}

export type ID = string | number
