import { SectionsRepositoryGql } from './SectionsRepositoryGql'
import { SectionsRepositoryJson } from './SectionsRepositoryJson'
import { Section, SectionFilter } from './SectionsTypes'

const Repository = process.env.DC_CONFIG.mock?.sections ? SectionsRepositoryJson : SectionsRepositoryGql

export class SectionsService {
  static async getOne(filter?: SectionFilter) {
    const result: Section<unknown> = await Repository.getOne(filter)
    return result
  }
}
