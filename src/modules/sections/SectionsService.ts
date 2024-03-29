import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { SectionsRepositoryGql } from './SectionsRepositoryGql'
import { SectionsRepositoryJson } from './SectionsRepositoryJson'
import { Section, SectionFilter } from './SectionsTypes'

const Repository = () => (shop_ctx.mock?.sections ? SectionsRepositoryJson : SectionsRepositoryGql)

export class SectionsService {
  static async getOne(filter?: SectionFilter) {
    try {
      const page = filter.page ?? 'home'
      delete filter.page
      const result: Section<any> = await Repository().getOne(filter)
      const sectionsByCategory = this.getByCategory(result.data, page)
      BroadcastService.emit('Sections', sectionsByCategory)

      return sectionsByCategory
    } catch (error) {
      throw new Error(error?.message)
    }
  }

  private static async getByCategory(data, page) {
    return {
      header: data.header,
      footer: data.footer,
      content: data[page]
    }
  }
}
