import { nullable } from '../HelpersTypes'

export interface ComponentGroup {
  id: number
  shopId: number
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  description?: nullable<string>
  optional?: nullable<boolean>
}
