import { nullable } from '../HelpersTypes'

export interface ProductImage {
  id: number
  productId: number
  createdAt: string
  updatedAt: string
  src?: nullable<string>
  alt?: nullable<string>
  position?: nullable<number>
  colorIds?: nullable<number[]>
}
