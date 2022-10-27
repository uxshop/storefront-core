export interface Script {
  id?: string
  position?: number
  name?: string
  location?: string
  page?: string
  load_method?: string
  content?: string
  category?: string
  active?: boolean
  description?: string
  url?: string
}

export interface ScriptsResponse {
  scripts: Array<Script>
}

export interface ScriptFilter {
  page?: string
  location?: string
}

export interface OptionsGetScripts {
  fields: Array<ScriptFields>
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
