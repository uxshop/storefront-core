export interface Script {
  id: string
  name: string
  category: string
  location: string
  active: boolean
  position?: number
  page?: string
  load_method?: string
  content?: string
  description?: string
  url?: string
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
  | 'load_method'
  | 'content'
  | 'category'
  | 'active'
  | 'description'
  | 'url'
