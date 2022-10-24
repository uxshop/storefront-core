import { Newsletter, NewsletterInput } from './NewsletterTypes'

export class NewsletterRepositoryJson {
  static async subscribe(input: NewsletterInput): Promise<Newsletter> {
    const mock = { ...shop_ctx.mock?.newsletter }

    if (input.email == mock.email) {
      throw new Error('email already subscribed')
    }

    mock.email = input.email
    return mock || {}
  }
}
