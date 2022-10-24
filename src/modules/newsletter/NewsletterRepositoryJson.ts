import { Newsletter, NewsletterInput } from './NewsletterTypes'

export class NewsletterRepositoryJson {
  static async subscribe(input: NewsletterInput): Promise<Newsletter> {
    if (input.email == 'test2@gmail.com') throw new Error()

    const result = shop_ctx.mock?.newsletter
    return result || {}
  }
}
