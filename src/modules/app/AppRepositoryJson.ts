import { AppFilter, AppFields } from './AppTypes'

export class AppRepositoryJson {
  static async getById(id: number, fields?: AppFields[]) {
    const mock = shop_ctx.mock?.apps || {}

    if (id != mock.id) {
      throw new Error('apps_not_found')
    }

    const isFieldNotSelected = entry => !fields.includes(entry)

    const deleteFieldIfNecessary = entry => {
      isFieldNotSelected(entry) && delete mock[entry]
    }

    fields && Object.keys(mock).forEach(deleteFieldIfNecessary)

    return mock
  }

  static async getBySlug(slug: string, fields?: AppFields[]) {
    const mock = shop_ctx.mock?.apps || {}

    if (slug != mock.slug) {
      throw new Error('apps_not_found')
    }

    const isFieldNotSelected = entry => !fields.includes(entry)

    const deleteFieldIfNecessary = entry => {
      isFieldNotSelected(entry) && delete mock[entry]
    }

    fields && Object.keys(mock).forEach(deleteFieldIfNecessary)

    return mock
  }
}
