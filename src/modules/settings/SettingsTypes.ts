export interface Setting<T> {
  shopId: Number
  themeId: Number
  version: String
  page: String
  data: T
}

export interface SettingResponse {
  setting: Setting<string>
}

export interface SettingFilter {
  sectionType?: String
  themeId?: Number
  version?: String
  page?: String
}
