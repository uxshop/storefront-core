export class ShopQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private getPlanFields() {
    return `
      {
        id,
        planId,
        lastShopPlanId,
        name,
        slug,
        originalPrice,
        price,
        pageviewsLimit,
        productsLimit,
        usersLimit,
        additionalChargeType,
        additionalChargeValue,
        freePlan,
        earlyInvoice,
        billingDay,
        billingFrequency,
        currentCycle,
        currentCycleStartsAt,
        currentCycleEndsAt,
        active,
        status,
        suspendedAt,
        suspendedBy,
        canceledAt,
        cancelationReason,
        changedPlanAt,
        lastChargedAt,
        nextChargeAt,
      }
    `
  }

  private defaultFields() {
    return [
      'id',
      'themeId',
      'termsUserId',
      'usersCount',
      'productsCount',
      'name',
      'slug',
      'doocaDomain',
      'shippingTimeAdditional',
      'shippingTimeAdditionalKit',
      'appendToHead',
      'appendToBody',
      'zipcode',
      'customerRegisterApproves',
      'customerRegisterFor',
      'termsAcceptedAt',
      'createdAt',
      'notifications',
      'scheduleDelivery',
      'active',
      'enableBeta',
      'ssl',
      'redirectTemporary',
      'catalog',
      'checkoutNoteActive',
      'giftWrappingActive',
      'customerRegisterIndividual',
      'customerRegisterCompany',
      'googleConnect',
      'facebookConnect',
      'iderisConnect',
      'updatedAt',
      'industry',
      'phrase',
      'description',
      'keywords',
      'email',
      'emailFrom',
      'domain',
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
      'suspendedAt',
      'canceledAt',
      'deletedAt',
      'trial',
      `plan ${this.getPlanFields()}`,
      'checkoutOptions',
      'betaCheckout',
      'betaAdmin',
      'bagyApps'
    ]
  }

  getShop() {
    const query = 'query Shop {shop{' + this.getFields() + '}}'

    return query.toString()
  }
}
