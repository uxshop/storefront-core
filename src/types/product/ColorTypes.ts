import { Image } from '../ImageTypes'
import { ProductImage } from './ProductImageTypes'
import { nullable } from '../NullableTypes'

export interface Color {
  id: number
  name: string
  slug: string
  url: string
  hexadecimal?: nullable<string>
  active?: nullable<boolean>
  externalId?: nullable<string>
  image?: nullable<Image>
  productImages?: nullable<ProductImage[]>
  position?: nullable<number>
}
