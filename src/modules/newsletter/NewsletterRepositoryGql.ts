import { client } from '../../services/GraphqlService'
import { NewsletterQueries } from './NewsletterQueries'
import { Newsletter, NewsletterResponse, OptionsSubscribeNewsletter } from './NewsletterTypes'

export class NewsletterRepositoryGql {
  static async subscribe({ input, fields }: OptionsSubscribeNewsletter): Promise<Newsletter> {
    const newsletterQuery = new NewsletterQueries(fields)
    const newsletterSubscribeQuery: string = newsletterQuery.subscribe()
    try {
      const { sendMailing: newsletter }: NewsletterResponse = await client.mutation(
        newsletterSubscribeQuery,
        input && { data: { ...input } }
      )

      return newsletter
    } catch (error) {
      throw new Error(error)
    }
  }
}
