import { AppsFields } from './AppsTypes'

export class AppsRepositoryJson {
  static async getById(id: Number, fields?: Array<AppsFields>) {
    const mock = process.env.DC_CONFIG.mock?.apps
    const result = mock && mock.filter(app => app.id == id)
    return result || {}
  }
}
