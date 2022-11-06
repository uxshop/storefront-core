import { Image } from '../ImageTypes'
import { nullable } from '../HelpersTypes'

export interface Brand {
  id: number
  name: string
  slug: string
  url: string
  externalId?: nullable<string>
  hotsiteId?: nullable<number>
  description?: nullable<string>
  shortDescription?: nullable<string>
  image?: nullable<Image>
  banner?: nullable<Image>
  metaTitle?: nullable<string>
  metaKeywords?: nullable<string>
  metaDescription?: nullable<string>
  position?: nullable<number>
  active?: nullable<boolean>
  createdAt?: string
  updatedAt?: string
}
