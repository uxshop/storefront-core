import { NewsletterService } from '../NewsletterService'
import 'isomorphic-fetch'

describe('Newsletter Module', () => {
  it('Should subscribe to newsletter successfully', async () => {
    const USER_DATA = { name: 'Test', email: 'test2@gmail.com' }
    const newsletterResult = await NewsletterService.subscribe(USER_DATA)
    expect(newsletterResult.name).toEqual(USER_DATA.name)
    expect(newsletterResult.email).toEqual(USER_DATA.email)
  })

  it('Should try to subscribe with email already subscribed and it should throw error', async () => {
    const USER_DATA = { name: 'Test', email: 'test@gmail.com' }
    expect(async () => await NewsletterService.subscribe(USER_DATA)).rejects.toThrow()
  })
})
