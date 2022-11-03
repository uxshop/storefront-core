export class ShopQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'id',
      'themeId',
      'name',
      'slug',
      'domain',
      'domainTemporary',
      'shippingTimeAdditional',
      'shippingTimeAdditionalKit',
      'appendToHead',
      'appendToBody',
      'zipcode',
      'customerRegisterApproves',
      'customerRegisterFor',
      'scheduleDelivery',
      'isActive',
      'isSsl',
      'isRedirectTemporary',
      'isCatalog',
      'isCheckoutNoteActive',
      'isGiftWrappingActive',
      'isCustomerRegisterIndividual',
      'isCustomerRegisterCompany',
      'isGoogleConnect',
      'isFacebookConnect',
      'industry',
      'phrase',
      'description',
      'keywords',
      'email',
      'emailFrom',
      'shippingRestrictionMessage',
      'policyFooter',
      'company',
      'cgc',
      'city',
      'state',
      'street',
      'number',
      'detail',
      'district',
      'phone',
      'checkoutNoteLabel',
      'giftWrappingPrice',
      'trackerGoogleAnalytics { id }',
      'trackerGoogleConversion { id, label }',
      'trackerFacebookPixel { id }',
      'organization',
      'checkoutOptions',
      'isBetaCheckout'
    ]
  }

  getShop() {
    const query = 'query Shop {shop{' + this.getFields() + '}}'

    return query.toString()
  }
}
