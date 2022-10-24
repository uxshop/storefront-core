import { Newsletter, OptionsSubscribeNewsletter } from './NewsletterTypes'

export class NewsletterRepositoryJson {
  static async subscribe({ input, fields }: OptionsSubscribeNewsletter): Promise<Newsletter> {
    if (input.email == 'test2@gmail.com') throw new Error()

    const result = shop_ctx.mock?.newsletter
    return result || {}
  }
}
