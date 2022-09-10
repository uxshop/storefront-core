import {
  OptionsAddItemCart,
  OptionsCleanCart,
  OptionsDeleteItemCart,
  OptionsGetCart,
  OptionsUpdateItemCart
} from './CartTypes'

export class CartRepositoryJson {
  static async addItem({ fields, input }: OptionsAddItemCart) {
    const result = shop_ctx.mock?.cart
    return result || {}
  }

  static async updateItem({ fields, input }: OptionsUpdateItemCart) {
    const result = shop_ctx.mock?.cart
    return result || {}
  }

  static async deleteItem({ fields, input }: OptionsDeleteItemCart) {
    const result = shop_ctx.mock?.cart
    return result || {}
  }

  static async cleanCart({ fields, input }: OptionsCleanCart) {
    const result = shop_ctx.mock?.cart
    return result || {}
  }

  static async getCart({ fields, filter }: OptionsGetCart) {
    const result = shop_ctx.mock?.cart
    return result || {}
  }
}
