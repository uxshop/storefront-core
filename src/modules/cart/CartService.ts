import { CartRepositoryGql } from './CartRepositoryGql'
import { CartRepositoryJson } from './CartRepositoryJson'
import { AddItemInput, CartFields, DeleteItemInput, UpdateItemInput } from './CartTypes'

const Repository = shop_ctx.mock?.cart ? CartRepositoryJson : CartRepositoryGql

export class CartService {
  static async addItem(input: AddItemInput, fields?: Array<CartFields>) {
    try {
      const result = await Repository.addItem({ fields: fields || null, input: input })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static async updateItem(input: UpdateItemInput, fields?: Array<CartFields>) {
    try {
      const result = await Repository.updateItem({ fields: fields || null, input: input })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static async deleteItem(input: DeleteItemInput, fields?: Array<CartFields>) {
    try {
      const result = await Repository.deleteItem({ fields: fields || null, input: input })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }

  static async getCart(cartToken: string, fields?: Array<CartFields>) {
    try {
      const result = await Repository.getCart({ fields: fields || null, filter: { cartToken: cartToken } })
      return result
    } catch (error) {
      throw new Error(error)
    }
  }
}
