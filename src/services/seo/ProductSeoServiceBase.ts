import { Product } from '../../modules/product/ProductTypes'
import { NavigationService } from '../navigation/navigation-service'
import { SeoService } from './SeoService'
import { ProductMicroData } from './types'

export class ProductSeoServiceBase extends SeoService {
  protected getProductData(product: Product): ProductMicroData {
    const productUrl = `${shop_ctx?.domain}${NavigationService.getProductLink(product?.slug)}`
    const productBrandUrl = `${shop_ctx?.domain}${NavigationService.getBrandLink(product?.brand?.slug)}`

    let data: ProductMicroData = {
      '@type': 'Product',
      url: productUrl,
      name: product.name,
      sku: String(product.id),
      description: product.name,
      offers: {
        '@type': 'AggregateOffer',
        url: productUrl,
        priceCurrency: 'BRL',
        priceValidUntil: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
        price: product?.price,
        lowPrice: product?.minPriceRange ?? product?.price,
        highPrice: product?.maxPriceRange ?? product?.price,
        offerCount: product?.variations?.length ?? 1,
        itemCondition: 'http://schema.org/NewCondition',
        availability: `http://schema.org/${product?.balance > 1 ? 'InStock' : 'OutOfStock'}`
      }
    }

    if (product.images.length) {
      product.images.forEach(function (image) {
        data.image = []
        data.image.push(image.src)
      })
    }

    const billetPayment = product?.payments?.find(payment => payment.method == 'billet')

    let billetTotal = Number(billetPayment?.installment?.total) ?? null
    if (billetTotal < product?.minPriceRange) {
      data.offers.price = billetTotal
      data.offers.lowPrice = billetTotal
    }

    if (product.description) data.description = this.formatRichText(product.description)

    if (product.brand) {
      data.brand = {
        '@type': 'Brand',
        name: product.brand.name,
        logo: product.brand.image.src,
        image: product.brand.image.src,
        url: productBrandUrl
      }
      if (product.brand.image) data.brand.image = product.brand.image.src
    }

    if (product.category.name) data.category = product.category.name

    if (product.weight)
      data.weight = {
        '@type': 'QuantitativeValue',
        value: product.weight,
        unitCode: 'kg'
      }

    if (product.width)
      data.width = {
        '@type': 'QuantitativeValue',
        value: product.width,
        unitCode: 'cm'
      }

    if (product.height)
      data.height = {
        '@type': 'QuantitativeValue',
        value: product.height,
        unitCode: 'cm'
      }

    if (product.depth)
      data.depth = {
        '@type': 'QuantitativeValue',
        value: product.depth,
        unitCode: 'cm'
      }

    if (product?.gtin) data.gtin13 = product.gtin
    if (product?.color) data.color = product.color.name

    data.sku = product?.sku ?? String(product.id)

    return data
  }
}
