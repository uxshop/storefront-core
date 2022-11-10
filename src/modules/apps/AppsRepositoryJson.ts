import { AppsFields } from './AppsTypes'

export class AppsRepositoryJson {
  static async getById(id: number, fields?: AppsFields[]) {
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
}
