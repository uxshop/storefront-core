import { BroadcastService } from '../../services/broadcast/broadcast-service'
import { NewsletterRepositoryGql } from './NewsletterRepositoryGql'
import { NewsletterRepositoryJson } from './NewsletterRepositoryJson'
import { Newsletter, NewsletterInput } from './NewsletterTypes'

const Repository = () => (shop_ctx.mock?.newsletter ? NewsletterRepositoryJson : NewsletterRepositoryGql)

export class NewsletterService {
  static async subscribe(userData: NewsletterInput): Promise<Newsletter> {
    try {
      const newsletterResult = await Repository().subscribe(userData)
      BroadcastService.emit('Newsletter', newsletterResult)
      return newsletterResult
    } catch (error) {
      throw new Error(error?.message)
    }
  }
}
