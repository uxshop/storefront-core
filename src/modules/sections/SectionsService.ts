import { SectionsRepositoryGql } from './SectionsRepositoryGql'
import { SectionsRepositoryJson } from './SectionsRepositoryJson'
import { Section, SectionFilter } from './SectionsTypes'

const Repository = shop.mock?.sections ? SectionsRepositoryJson : SectionsRepositoryGql

export class SectionsService {
  static async getOne(filter?: SectionFilter) {
    const result: Section<unknown> = await Repository.getOne(filter)
    const page = filter.page ?? 'home'

    return await this.getByCategory(result.data, page)
  }

  static async getByCategory(data, page) {
    return {
      header: data.header,
      footer: data.footer,
      content: data[page]
    }
  }
}
