export interface Setting<T> {
  shop_id: Number
  theme_id: Number
  version: String
  page: String
  data: T
}

export interface SettingResponse {
  setting: Setting<string>
}

export interface SettingFilter {
  section_type?: String
  theme_id?: Number
  version?: String
  page?: String
}
