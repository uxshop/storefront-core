export interface Script {
  id: string
  name: string
  category: string
  location: string
  isActive: boolean
  position?: number
  page?: string
  loadMethod?: string
  content?: string
  description?: string
  src?: string
}

export interface ScriptsResponse {
  scripts: Script[]
}

export interface ScriptFilter {
  page?: string
  location?: string
}

export interface OptionsGetScripts {
  fields: ScriptFields[]
  filter?: ScriptFilter
}

export type ScriptFields =
  | 'id'
  | 'position'
  | 'name'
  | 'location'
  | 'page'
  | 'loadMethod'
  | 'content'
  | 'category'
  | 'isActive'
  | 'description'
  | 'src'
