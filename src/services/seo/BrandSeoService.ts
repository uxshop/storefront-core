import { SeoService } from './SeoService'
import { NavigationService } from '../navigation/navigation-service'
import { Brand } from '../../types/product/BrandTypes'
import { BrandMicroData } from './types'

export class BrandSeoService extends SeoService {
  brand: Brand

  constructor(data: Brand) {
    super()
    this.brand = data
  }

  public getBrand(): string {
    const brandUrl = `${shop_ctx?.domain}${NavigationService.getBrandLink(this.brand?.slug)}`

    let microData: BrandMicroData = {
      '@context': 'https://schema.org',
      '@type': 'Brand',
      name: this.brand.name,
      logo: this.brand?.image?.src,
      image: this.brand?.image?.src,
      url: brandUrl
    }

    return this.render(microData)
  }
}
