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
        plan_id,
        last_shop_plan_id,
        name,
        slug,
        original_price,
        price,
        pageviews_limit,
        products_limit,
        users_limit,
        additional_charge_type,
        additional_charge_value,
        free_plan,
        early_invoice,
        billing_day,
        billing_frequency,
        current_cycle,
        current_cycle_starts_at,
        current_cycle_ends_at,
        active,
        status,
        suspended_at,
        suspended_by,
        canceled_at,
        cancelation_reason,
        changed_plan_at,
        last_charged_at,
        next_charge_at,
      }
    `
  }

  private defaultFields() {
    return [
      'id',
      'theme_id',
      'terms_user_id',
      'users_count',
      'products_count',
      'name',
      'slug',
      'dooca_domain',
      'shipping_time_additional',
      'shipping_time_additional_kit',
      'append_to_head',
      'append_to_body',
      'zipcode',
      'customer_register_approves',
      'customer_registerFor',
      'terms_accepted_at',
      'created_at',
      'notifications',
      'schedule_delivery',
      'active',
      'enable_beta',
      'ssl',
      'redirect_temporary',
      'catalog',
      'checkout_note_active',
      'gift_wrapping_active',
      'customer_register_individual',
      'customer_register_company',
      'google_connect',
      'facebook_connect',
      'ideris_connect',
      'updated_at',
      'industry',
      'phrase',
      'description',
      'keywords',
      'email',
      'email_from',
      'domain',
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
      'suspended_at',
      'canceled_at',
      'deleted_at',
      'trial',
      `plan ${this.getPlanFields()}`,
      'checkout_options',
      'beta_checkout',
      'beta_admin',
      'bagy_apps'
    ]
  }

  getShop() {
    const query = 'query Shop {shop{' + this.getFields() + '}}'

    return query.toString()
  }
}
