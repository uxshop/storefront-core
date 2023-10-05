export class BuyTogetherQueries {
  fields: null | string[]

  constructor(fields) {
    this.fields = fields || this.getAllFields()
  }

  private getAllFields() {
    return (
      this.fields ??
      `{
        id,
        name,
        title,
        buyButtonText,
        productId,
        colorId,
        dateFrom,
        dateTo,
        active,
        product ${this.getProduct()},
        productsPivot ${this.getProduct()}
      }`
    )
  }

  private getProduct() {
    return `{
      id
      name
      slug
      payments {
        id
        gatewayId
        externalId
        name
        method
        external
        maxParcels
        parcelsNoInterest
        installments {
          markup
          parcel
          discount
          interest
          total
          parcelPrice
        }
        minParcelPrice
        minPurchase
        maxPurchase
        expireDays
        softDescriptor
        description
        isActive
        position
        billetMinDiscountPrice
        markup
        instructions
        isDefault
        showOnlyInstoreShipping
        createdAt
        updatedAt
        installment {
          markup
          parcel
          discount
          interest
          total
          parcelPrice
        }
      }
      gtin
      mpn
      additionalShippingTime
      externalId
      categoryDefaultId
      hotsiteId
      description
      shortDescription
      relevance
      tags
      minQuantity
      maxQuantity
      isSellInKitOnly
      metaTitle
      metaDescription
      metaKeywords
      isKit
      kitMarkup
      isVirtual
      isPreSale
      images {
        id
        productId
        src
        alt
        colorIds
        variationIds
        position
      }
      video
      weight
      depth
      width
      height
      priceOutOfStock
      isSellOutOfStock
      additionalTimeOutOfStock
      balance
      price
      minPriceRange
      maxPriceRange
      hasPriceRange
      priceCompare
      discount
      billetDiscount
      paymentsReason
      warranty
      model
      gender
      ageGroup
      brand {
        id
        name
        slug
        description
        shortDescription
        image {
          id
          productId
          src
          alt
          colorIds
          variationIds
          position
        }
        banner {
          id
          productId
          src
          alt
          colorIds
          variationIds
          position
        }
      }
      category {
        id
        name
        slug
        description
        breadcrumb
        googleTaxonomyId
      }
      categories {
        id
        name
        slug
        description
        breadcrumb
        googleTaxonomyId
      }
      reference
      color {
        id
        name
        slug
        hexadecimal
        position
      }
      attribute {
        id
        name
        slug
        attributeId
        attributeName
        position
        isActive
      }
      attributeSecondary {
        id
        name
        slug
        attributeId
        attributeName
        position
        isActive
      }
      features {
        id
        name
        slug
        values {
          id
          name
          slug
        }
      }
      productId
      createdAt
      variations {
        id
        name
        slug
        payments {
          id
          gatewayId
          externalId
          name
          method
          external
          maxParcels
          parcelsNoInterest
          installments {
            markup
            parcel
            discount
            interest
            total
            parcelPrice
          }
          minParcelPrice
          minPurchase
          maxPurchase
          expireDays
          softDescriptor
          description
          isActive
          position
          billetMinDiscountPrice
          markup
          instructions
          isDefault
          showOnlyInstoreShipping
          createdAt
          updatedAt
          installment {
            markup
            parcel
            discount
            interest
            total
            parcelPrice
          }
        }
        gtin
        mpn
        additionalShippingTime
        externalId
        categoryDefaultId
        hotsiteId
        description
        shortDescription
        relevance
        reference
        tags
        minQuantity
        maxQuantity
        isSellInKitOnly
        metaTitle
        metaDescription
        metaKeywords
        isKit
        kitMarkup
        isVirtual
        isPreSale
        images {
          id
          productId
          src
          alt
          colorIds
          variationIds
          position
        }
        video
        weight
        depth
        width
        height
        priceOutOfStock
        isSellOutOfStock
        additionalTimeOutOfStock
        balance
        price
        minPriceRange
        maxPriceRange
        hasPriceRange
        priceCompare
        discount
        billetDiscount
        paymentsReason
        warranty
        model
        gender
        ageGroup
        brand {
          id
          name
          slug
          description
          shortDescription
          image {
            id
            productId
            src
            alt
            colorIds
            variationIds
            position
          }
          banner {
            id
            productId
            src
            alt
            colorIds
            variationIds
            position
          }
        }
        category {
          id
          name
          slug
          description
          breadcrumb
          googleTaxonomyId
        }
        categories {
          id
          name
          slug
          description
          breadcrumb
          googleTaxonomyId
        }
        color {
          id
          name
          slug
          hexadecimal
          position
        }
        attribute {
          id
          name
          slug
          attributeId
          attributeName
          position
          isActive
        }
        attributeSecondary {
          id
          name
          slug
          attributeId
          attributeName
          position
          isActive
        }
        features {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
        productId
        createdAt
        components {
          productComponentId
          productComponentGroupId
          quantity
          isDefault
          isOptional
          variations {
            id
            name
            slug
            gtin
            mpn
            additionalShippingTime
            externalId
            categoryDefaultId
            hotsiteId
            description
            shortDescription
            relevance
            reference
            tags
            minQuantity
            maxQuantity
            isSellInKitOnly
            metaTitle
            metaDescription
            metaKeywords
            isKit
            kitMarkup
            isVirtual
            isPreSale
            video
            weight
            depth
            width
            height
            priceOutOfStock
            isSellOutOfStock
            additionalTimeOutOfStock
            balance
            price
            minPriceRange
            maxPriceRange
            hasPriceRange
            priceCompare
            discount
            billetDiscount
            paymentsReason
            warranty
            model
            gender
            ageGroup
            productId
            createdAt
            sku
            isGift
          }
          productComponentGroupName
        }
        componentGroups {
          id
          name
          description
          slug
          optional
        }
        sku
        colors {
          id
          name
          slug
          hexadecimal
          position
        }
        isGift
        releaseDate {
          releaseDate
          now
        }
      }
      components {
        productComponentId
        productComponentGroupId
        quantity
        isDefault
        isOptional
        productComponentGroupName
      }
      componentGroups {
        id
        name
        description
        slug
        optional
      }
      sku
      colors {
        id
        name
        slug
        hexadecimal
        position
      }
      isGift
      releaseDate {
        releaseDate
        now
      }
    }`
  }

  getOneFullQuery() {
    return `query BuyTogether($filter: filterBuyTogether) {
      buyTogether(filter: $filter) 
        ${this.getAllFields()}
    }`
  }
}
