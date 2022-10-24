import { NewsletterRepositoryGql } from './NewsletterRepositoryGql'
import { NewsletterRepositoryJson } from './NewsletterRepositoryJson'
import { Newsletter, NewsletterFields, NewsletterInput } from './NewsletterTypes'

const Repository = shop_ctx.mock?.newsletter ? NewsletterRepositoryJson : NewsletterRepositoryGql

export class NewsletterService {
  static async subscribe(userData: NewsletterInput): Promise<Newsletter> {
    const newsletterResult = await Repository.subscribe(userData)
    return newsletterResult
  }
}
