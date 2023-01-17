import { Shop } from '../../modules/shop/ShopTypes'
import { SeoService } from './SeoService'
import { ShopMicroData } from './types'

export class ShopSeoService extends SeoService {
  shop: Shop

  constructor(data: Shop) {
    super()
    this.shop = data
  }

  public getShop(): string {
    if (!this.shop) return

    const microData: ShopMicroData = {
      '@context': 'http://schema.org',
      '@type': 'Store',
      name: this.shop.name,
      telephone: this.shop.phone,
      email: this.shop.email,
      url: `https://${this.shop?.domain ?? this.shop.domainTemporary}`,
      description: this.shop.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${this.shop?.street} ${this.shop?.number} ${this.shop?.detail ?? null}`,
        addressLocality: `${this.shop?.district} - ${this.shop?.city}`,
        addressRegion: this.shop?.state,
        addressCountry: 'Brasil',
        postalCode: this.shop?.zipcode
      }
    }
    return this.render(microData)
  }
}
