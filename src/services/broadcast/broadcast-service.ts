import { Shop } from 'src/modules/shop/ShopTypes'
import { Brand } from 'src/types/product/BrandTypes'

export class BroadcastService {
  static sendEvent(event: CustomEvent) {
    window.dispatchEvent(event)
  }

  static sendBrand(brand: Brand) {
    const brandEvent = new CustomEvent('sendBrand', {
      detail: brand
    })

    this.sendEvent(brandEvent)
  }

  static sendShop(shop: Shop) {
    const brandEvent = new CustomEvent('sendShop', {
      detail: shop
    })

    this.sendEvent(brandEvent)
  }
}
