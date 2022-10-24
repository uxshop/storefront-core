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
      'theme_id',
      'name',
      'slug',
      'domain',
      'domain_temporary',
      'shipping_time_additional',
      'shipping_time_additional_kit',
      'append_to_head',
      'append_to_body',
      'zipcode',
      'customer_register_approves',
      'customer_registerFor',
      'schedule_delivery',
      'active',
      'ssl',
      'redirect_temporary',
      'catalog',
      'checkout_note_active',
      'gift_wrapping_active',
      'customer_register_individual',
      'customer_register_company',
      'google_connect',
      'facebook_connect',
      'industry',
      'phrase',
      'description',
      'keywords',
      'email',
      'email_from',
      'shipping_restriction_message',
      'policy_footer',
      'company',
      'cgc',
      'city',
      'state',
      'street',
      'number',
      'detail',
      'district',
      'phone',
      'checkout_note_label',
      'gift_wrapping_price',
      'tracker_google_analytics { id }',
      'tracker_google_conversion { id, label }',
      'tracker_facebook_pixel { id }',
      'organization',
      'checkout_options',
      'beta_checkout'
    ]
  }

  getShop() {
    const query = 'query Shop {shop{' + this.getFields() + '}}'

    return query.toString()
  }
}
