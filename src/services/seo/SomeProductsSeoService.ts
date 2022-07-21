import { SeoService } from './SeoService'
import { SomeProductsMicroData } from './types'

export interface SomeProductsProps {
  name?: string
  description?: string
}

export class SomeProductsSeoService extends SeoService {
  data: SomeProductsProps

  constructor(data: SomeProductsProps) {
    super()
    this.data = data
  }

  public getSomeProducts(): string {
    let microData: SomeProductsMicroData = {
      '@context': 'https://schema.org',
      '@type': 'SomeProducts'
    }
    if (this.data.name) microData.name = this.data.name
    if (this.data.description) microData.description = this.data.description
    return this.render(microData)
  }
}
