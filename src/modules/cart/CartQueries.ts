export class CartQueries {
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
      'token',
      `customer {
        email, 
        doc, 
        newsletter, 
        firstName, 
        lastName, 
        name, 
        phone
      }`,
      `address {
        receiver, 
        zipcode, 
        street, 
        Int, 
        detail, 
        district, 
        city, 
        state
      }`,
      'coupon',
      'shippingToken',
      'paymentToken',
      'creditcard {cvv, exp, name, Int}',
      `items {
        id,
        name,
        variation,
        isVirtual,
        quantity,
        allowedGiftWrapping,
        totalCost,
        total,
        price,
        priceCost,
        stockBalance,
        canSellOutOfStock,
        variationId,
        additionalPrice,
        priceGiftWrapping,
        allowedGiftWrappingPrice,
        discount,
        priceCompare,
        image {src, alt},
        customize {
            id, 
            name, 
            content {
                id, 
                field, 
                value, 
                price
            }
        },
        components {variationId, componentId}
      }`
    ]
  }

  getCartQuery() {
    return `query Query($cartToken: String) {
        cart(cart_token: $cartToken) {
          ${this.getFields()}
        }
      }`
  }

  addItemQuery() {
    return `mutation Mutation($cartToken: String, $items: [CartItemAddInput]) {
        addItem(cart_token: $cartToken, items: $items) {
          ${this.getFields()}
        }
      }`
  }

  updateItemQuery() {
    return `mutation Mutation($cartToken: String!, $item: updateItemTypeInput) {
        updateItem(cart_token: $cartToken, item: $item) {
          ${this.getFields()}
        }
      }`
  }

  deleteItemQuery() {
    return `mutation DeleteItem($cartToken: String!, $item: deleteItemTypeInput) {
        deleteItem(cart_token: $cartToken, item: $item) {
          ${this.getFields()}
        }
      }`
  }

  cleanCartQuery() {
    return `mutation CleanCart($cartToken: String!, $items: [deleteItemTypeInput]) {
        cleanCart(cartToken: $cartToken, items: $items) {
          ${this.getFields()}
        }
      }`
  }
}
