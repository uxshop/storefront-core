import { client } from '../../services/GraphqlService'
import { CartQueries } from './CartQueries'
import {
  AddItemResponse,
  Cart,
  CleanCartResponse,
  DeleteItemResponse,
  GetCartResponse,
  OptionsAddItemCart,
  OptionsCleanCart,
  OptionsDeleteItemCart,
  OptionsGetCart,
  OptionsUpdateItemCart,
  UpdateItemResponse
} from './CartTypes'

export class CartRepositoryGql {
  static async addItem({ fields, input }: OptionsAddItemCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const addItemQuery: string = cartQuery.addItemQuery()
    const { addItem }: AddItemResponse = await client.mutation(addItemQuery, input && { ...input })

    return addItem
  }

  static async updateItem({ fields, input }: OptionsUpdateItemCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const updateItemQuery: string = cartQuery.updateItemQuery()
    const { updateItem }: UpdateItemResponse = await client.mutation(updateItemQuery, input && { ...input })

    return updateItem
  }

  static async deleteItem({ fields, input }: OptionsDeleteItemCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const deleteItemQuery: string = cartQuery.deleteItemQuery()
    const { deleteItem }: DeleteItemResponse = await client.mutation(deleteItemQuery, input && { ...input })

    return deleteItem
  }

  static async cleanCart({ fields, input }: OptionsCleanCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const cleanCartQuery: string = cartQuery.cleanCartQuery()
    const { cleanCart }: CleanCartResponse = await client.mutation(cleanCartQuery, input && { ...input })

    return cleanCart
  }

  static async getCart({ fields, filter }: OptionsGetCart): Promise<Cart> {
    const cartQuery = new CartQueries(fields)
    const getCartQuery: string = cartQuery.getCartQuery()
    const { cart }: GetCartResponse = await client.query(getCartQuery, filter && { ...filter })

    return cart
  }
}
