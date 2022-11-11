export interface Setting<T> {
  shopId: number
  themeId: number
  version: string
  page: string
  data: T
  error?: string
}

export interface SettingResponse {
  setting: Setting<string>
}

export interface SettingFilter {
  sectionType?: String
  themeId?: number
  version?: string
  page?: string
}
