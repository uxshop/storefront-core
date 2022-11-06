import { Image } from './ImageTypes'
import { nullable } from './HelpersTypes'

export interface Category {
  id: number
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  bannerLink?: nullable<string>
  parentId?: nullable<number>
  hotsiteId?: nullable<number>
  externalId?: nullable<string>
  description?: nullable<string>
  image?: nullable<Image>
  banner?: nullable<Image>
  position?: nullable<number>
  depth?: nullable<number>
  breadcrumb?: nullable<string>
  googleTaxonomyId?: nullable<number>
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  metaKeywords?: nullable<string>
  url?: nullable<string>
  active?: nullable<boolean>
}
