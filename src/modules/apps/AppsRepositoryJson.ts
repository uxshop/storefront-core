import { AppsFields } from './AppsTypes'

export class AppsRepositoryJson {
  static async getById(id: number, fields?: Array<AppsFields>) {
    const mock = shop.mock?.apps || {}

    if (id != mock.id) {
      throw new Error('apps_not_found')
    }

    const isFIeldNotSelected = entry => !fields.includes(entry)

    const deleteFieldIfNecessary = entry => {
      isFIeldNotSelected(entry) && delete mock[entry]
    }

    fields && Object.keys(mock).forEach(deleteFieldIfNecessary)

    return mock
  }
}
