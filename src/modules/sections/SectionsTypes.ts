export interface Section<T> {
  shopId: Number
  themeId: Number
  version: String
  page: String
  data: T
}

export interface SectionResponse {
  section: Section<string>
}

export interface SectionFilter {
  sectionType?: String
  themeId?: Number
  version?: String
  page?: String
}
