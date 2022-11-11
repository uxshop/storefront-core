import { Color } from './ColorTypes'
import { AttributeValue } from './AttributeTypes'
import { ProductImage } from './ProductImageTypes'
import { nullable } from '../HelpersTypes'

export interface ProductVariation {
  id: number
  productId: number
  price: number
  createdAt: string
  updatedAt: string
  gridId?: nullable<number>
  colorId?: nullable<number>
  colorSecondaryId?: nullable<number>
  attributeValueId?: nullable<number>
  attributeValueSecondaryId?: nullable<number>
  externalId?: nullable<string>
  reference?: nullable<string>
  slug?: nullable<string>
  priceCompare?: nullable<number>
  sku?: nullable<string>
  gtin?: nullable<string>
  mpn?: nullable<string>
  additionalShippingTime?: nullable<number>
  images?: nullable<ProductImage[]>
  position?: nullable<number>
  active?: nullable<boolean>
  balance?: nullable<number>
  sellingOutOfStock?: nullable<boolean>
  color?: nullable<Color>
  attribute?: nullable<AttributeValue>
  attributeSecondary?: nullable<AttributeValue>
}
