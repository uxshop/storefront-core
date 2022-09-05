import { Section, SectionFilter } from './SectionsTypes'

export class SectionsRepositoryJson {
  static async getOne(filter?: SectionFilter): Promise<Section<unknown>> {
    const { data } = shop.mock?.sections

    const dataParse = JSON.parse(data.section.data)

    return { ...data.section, data: dataParse }
  }
}
