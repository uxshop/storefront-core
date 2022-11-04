import { nullable } from './NullableTypes'
import { Category } from './CategoryTypes'
import { Image } from './ImageTypes'

export interface Post {
  id: number
  postCategoryId: number
  name: string
  description: string
  slug: string
  createdAt: string
  updatedAt: string
  url: string
  image?: nullable<Image>
  tags?: nullable<Tag[]>
  active?: nullable<boolean>
  metaTitle?: nullable<string>
  metaDescription?: nullable<string>
  metaKeywords?: nullable<string>
  category?: nullable<Category>
}

interface Tag {
  name: string
}
