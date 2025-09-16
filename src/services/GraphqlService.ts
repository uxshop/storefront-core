import { Client, createClient, defaultExchanges, gql } from '@urql/core'

class GraphqlService {
  client: Client

  constructor(api_url: string, token: string, domain: string) {
    if (!api_url && !token && !domain) console.error('api_url, token and domain are required')

    this.client = createClient({
      url: api_url,
      requestPolicy: 'cache-first',
      exchanges: defaultExchanges,
      maskTypename: true,
      fetchOptions: {
        headers: {
          token: token,
          domain: domain,
          'Client-Name': 'storefront-core',
        }
      }
    })
  }

  public async query<T>(query: string, variables?: any): Promise<T> {
    try {
      const { data, error }: any = await this.client.query(query, variables).toPromise()

      if (error) throw new Error(error)

      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  public async mutation<T>(query: string, variables: any): Promise<T> {
    try {
      const { data, error }: any = await this.client.mutation(query, variables).toPromise()

      if (error) throw new Error(error)

      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}

function getClient() {
  return new GraphqlService(shop_ctx.api_url, shop_ctx.token, shop_ctx.domain)
}

export { getClient }
