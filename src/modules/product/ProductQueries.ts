export class ProductQueries {
  fields: null | string[]

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getImageFields() {
    return '{alt, src}'
  }

  private getComponentGroupsFields() {
    return `{id, name, description, slug, optional}`
  }

  private getAttributeFields() {
    return `{id, name, slug, attributeId, attributeName}`
  }

  private getColorFields() {
    return `
    {
        id,
        name,
        slug,
        hexadecimal,
        image ${this.getImageFields()}
    }`
  }

  private getFeatureCommonFields() {
    return ['id', 'name', 'slug', `image ${this.getImageFields()}`]
  }

  private getFeatureFields() {
    return `{${this.getFeatureCommonFields().join()}, values {${this.getFeatureCommonFields().join()}}}`
  }

  private getBrandFields() {
    return `
    {
        id,
        name,
        slug,
        description,
        shortDescription,
        image ${this.getImageFields()},
        banner ${this.getImageFields()},
        url
    }`
  }

  private getCategoryFields() {
    return `
    {
        id, 
        name, 
        slug, 
        description, 
        image ${this.getImageFields()}, 
        breadcrumb, 
        googleTaxonomyId, 
        url
    }`
  }

  private getPaymantInstallmentFields() {
    return '{markup, parcel, discount, interest, total, parcelPrice}'
  }

  private getPaymentFields() {
    return [
      'id',
      'gatewayId',
      'externalId',
      'name',
      'method',
      'external',
      'maxParcels',
      'parcelsNoInterest',
      `installments ${this.getPaymantInstallmentFields()}`,
      'minParcelPrice',
      'minPurchase',
      'maxPurchase',
      'expireDays',
      'softDescriptor',
      'description',
      'isActive',
      'position',
      'billetMinDiscountPrice',
      'markup',
      'instructions',
      'isDefault',
      'showOnlyInstoreShipping',
      'createdAt',
      'updatedAt',
      `installment ${this.getPaymantInstallmentFields()}`
    ]
  }

  private getComponentVariationsFields() {
    return [
      'id',
      'productId',
      'price',
      'colorId',
      'colorSecondaryId',
      'attributeValueId',
      'attributeValueSecondaryId',
      'reference',
      'slug',
      'priceCompare',
      'sku',
      'gtin',
      'mpn',
      'additionalShippingTime',
      `images ${this.getImageFields()}`,
      'balance',
      'isSellingOutOfStock',
      `color ${this.getColorFields()}`,
      `attribute ${this.getAttributeFields()}`,
      `attributeSecondary ${this.getAttributeFields()}`
    ]
  }

  private getComponentFields() {
    return `
    {
      productComponentId
      productComponentGroupId
      quantity
      isDefault
      isOptional
      variations {${this.getComponentVariationsFields().join()}}
    }`
  }

  private getCommonFields() {
    return [
      'id',
      'name',
      'slug',
      'url',
      `payments {${this.getPaymentFields().join()}}`,
      'gtin',
      'mpn',
      'additionalShippingTime',
      'externalId',
      'categoryDefaultId',
      'hotsiteId',
      'description',
      'shortDescription',
      'relevance',
      'tags',
      'minQuantity',
      'maxQuantity',
      'isSellInKitOnly',
      'metaTitle',
      'metaDescription',
      'metaKeywords',
      'isKit',
      'kitMarkup',
      'isVirtual',
      'isPreSale',
      `images ${this.getImageFields()}`,
      'video',
      'weight',
      'depth',
      'width',
      'height',
      'isSellOutOfStock',
      'additionalTimeOutOfStock',
      'balance',
      'price',
      'minPriceRange',
      'maxPriceRange',
      'hasPriceRange',
      'priceCompare',
      'discount',
      'billetDiscount',
      'paymentsReason',
      'warranty',
      'model',
      'gender',
      'ageGroup',
      'productId',
      `brand ${this.getBrandFields()}`,
      `category ${this.getCategoryFields()}`,
      `categories ${this.getCategoryFields()}`,
      `color ${this.getColorFields()}`,
      `attribute ${this.getAttributeFields()}`,
      `attributeSecondary ${this.getAttributeFields()}`,
      `features ${this.getFeatureFields()}`
    ]
  }

  private getFullVariations() {
    const componentsFields = [
      `components ${this.getComponentFields()}`,
      `componentGroups ${this.getComponentGroupsFields()}`
    ]

    return [...this.getCommonFields()].concat(componentsFields)
  }

  private defaultFields() {
    return [`${this.getFullVariations().join()}`, `variations {${this.getFullVariations().join()}}`]
  }

  listFullQuery() {
    return `query Products($agg: agg!, $filter: filterPaginationFilter) {
      products(agg: $agg, filter: $filter) {
            edges {
              node {
                ${this.getFields()}
              }
              cursor
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
              first
              total
            }
          }
        }`
  }

  getOnefullQuery() {
    return `query Product($filter: filterProduct) {
      product(filter: $filter) {
          ${this.getFields()}
        }
      }`
  }
}
