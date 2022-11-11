import { client } from '../../services/GraphqlService'
import { NewsletterQueries } from './NewsletterQueries'
import { Newsletter, NewsletterInput, NewsletterResponse } from './NewsletterTypes'

export class NewsletterRepositoryGql {
  static async subscribe(input: NewsletterInput): Promise<Newsletter> {
    const newsletterQuery = new NewsletterQueries()
    const newsletterSubscribeQuery: string = newsletterQuery.subscribe()
    const { sendMailing: newsletter }: NewsletterResponse = await client.mutation(
      newsletterSubscribeQuery,
      input && { data: { ...input } }
    )

    return newsletter
  }
}
