import { nullable } from '../../types/HelpersTypes'

export interface App {
  id?: nullable<string>
  slug?: nullable<number>
  type?: nullable<string>
  content?: nullable<string>
}

export interface AppFilter {
  id: nullable<number>
}

export interface AppResponse {
  app: App
}

export type AppFields = 'id' | 'slug' | 'type' | 'content'
