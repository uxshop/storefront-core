import { Section, SectionFilter } from './SectionsTypes'

export class SectionsRepositoryJson {
  static async getOne(filter?: SectionFilter): Promise<Section<unknown>> {
    const result = process.env.DC_CONFIG.mock?.sections

    return result || {}
  }
}
