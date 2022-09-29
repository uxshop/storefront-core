export class ProductQueries {
  fields: null | Array<string>

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
    return `{id, shop_id, name, description, slug, optional}`
  }

  private getAttributeFields() {
    return `{id, name, slug, attribute_id, attribute_name}`
  }

  private getColorFields() {
    return `
    {
        id,
        name,
        slug,
        hexadecimal,
        image ${this.getImageFields()},
        product_images {src, alt, color_ids}
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
        short_description,
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
        google_taxonomy_id, 
        url
    }`
  }

  private getPaymantInstallmentFields() {
    return '{markup, parcel, discount, interest, total, parcel_price}'
  }

  private getPaymentFields() {
    return [
      'id',
      'gateway_id',
      'external_id',
      'name',
      'method',
      'external',
      'max_parcels',
      'parcels_no_interest',
      `installments ${this.getPaymantInstallmentFields()}`,
      'min_parcel_price',
      'min_purchase',
      'max_purchase',
      'expire_days',
      'soft_descriptor',
      'description',
      'active',
      'position',
      'billet_min_discount_price',
      'markup',
      'instructions',
      'is_default',
      'show_only_instore_shipping',
      'created_at',
      'updated_at',
      `installment ${this.getPaymantInstallmentFields()}`
    ]
  }

  private getComponentFields() {
    return `
    {
        id,
        name,
        slug,
        url,
        payments {${this.getPaymentFields().join()}},
        gtin,
        mpn,
        additional_shipping_time,
        external_id,
        category_default_id,
        hotsite_id,
        description,
        short_description,
        relevance,
        tags,
        min_quantity,
        max_quantity,
        sell_in_kit_only,
        meta_title,
        meta_description,
        meta_keywords,
        kit,
        kit_markup,
        is_virtual,
        is_pre_sale,
        images ${this.getImageFields()},
        video,
        weight,
        depth,
        width,
        height,
        sell_out_of_stock,
        additional_time_out_of_stock,
        balance,
        price,
        min_price_range,
        max_price_range,
        has_price_range,
        price_compare,
        discount,
        billet_discount,
        payments_reason,
        warranty,
        model,
        gender,
        age_group,
        brand ${this.getBrandFields()},
        category ${this.getCategoryFields()},
        categories ${this.getCategoryFields()},
        color ${this.getColorFields()},
        attribute ${this.getAttributeFields()},
        attribute_secondary ${this.getAttributeFields()},
        features ${this.getFeatureFields()},
        component_groups ${this.getComponentGroupsFields()}
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
      'additional_shipping_time',
      'external_id',
      'category_default_id',
      'hotsite_id',
      'description',
      'short_description',
      'relevance',
      'tags',
      'min_quantity',
      'max_quantity',
      'sell_in_kit_only',
      'meta_title',
      'meta_description',
      'meta_keywords',
      'kit',
      'kit_markup',
      'is_virtual',
      'is_pre_sale',
      `images ${this.getImageFields()}`,
      'video',
      'weight',
      'depth',
      'width',
      'height',
      'sell_out_of_stock',
      'additional_time_out_of_stock',
      'balance',
      'price',
      'min_price_range',
      'max_price_range',
      'has_price_range',
      'price_compare',
      'discount',
      'billet_discount',
      'payments_reason',
      'warranty',
      'model',
      'gender',
      'age_group',
      'product_id',
      `brand ${this.getBrandFields()}`,
      `category ${this.getCategoryFields()}`,
      `categories ${this.getCategoryFields()}`,
      `color ${this.getColorFields()}`,
      `attribute ${this.getAttributeFields()}`,
      `attribute_secondary ${this.getAttributeFields()}`,
      `features ${this.getFeatureFields()}`,
      `components ${this.getComponentFields()}`,
      `component_groups ${this.getComponentGroupsFields()}`
    ]
  }

  private defaultFields() {
    return [`${this.getCommonFields().join()}`, `variations {${this.getCommonFields().join()}}`]
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
