import { nullable } from '../../types/HelpersTypes'

export interface App {
  id?: nullable<string>
  slug?: nullable<number>
  price?: nullable<number>
  shopId?: nullable<number>
  storeAppId?: nullable<number>
  content?: nullable<string>
  userId?: nullable<string>
  bridgePackageId?: nullable<string>
}

export interface AppsFilter {
  id: nullable<number>
}

export interface AppsResponse {
  app: App
}

export type AppsFields = 'id' | 'slug' | 'price' | 'shopId' | 'storeAppId' | 'content' | 'userId' | 'bridgePackageId'
