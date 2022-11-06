import { Image } from '../ImageTypes'
import { nullable } from '../HelpersTypes'

export interface Component {
  id: number
  name: string
  slug: string
  url: string
  gridId?: nullable<number>
  image?: nullable<Image>
  externalId?: nullable<string>
  categoryDefaultId?: nullable<number>
  brandId?: nullable<number>
  colorId?: nullable<number>
  hotsiteId?: nullable<number>
  description?: nullable<string>
  shortDescription?: nullable<string>
  relevance?: nullable<number>
  tags?: nullable<string>
  minQuantity?: nullable<number>
  maxQuantity?: nullable<number>
  sellInKitOnly?: nullable<boolean>
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  metaKeywords?: nullable<string>
  kit?: nullable<boolean>
  kitMarkup?: nullable<number>
  isVirtual?: nullable<boolean>
  isPreSale?: nullable<boolean>
  productComponentGroupId?: nullable<number>
}
