import { CartService } from '../CartService'
import { CartFields, CartItemAddInput } from '../CartTypes'
import 'isomorphic-fetch'

const SELECTED_FIELDS: CartFields[] = ['id', 'token']

const SINGLE_ITEM_TO_BE_ADDED_SAMPLE: CartItemAddInput[] = [{ variationId: 9469378, quantity: 1 }]
const MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE: CartItemAddInput[] = [
  ...SINGLE_ITEM_TO_BE_ADDED_SAMPLE,
  { variationId: 9469378, quantity: 1 }
]

beforeEach(() => {
  jest.setTimeout(60000)
})

describe('Cart Module', () => {
  it('Should add item and return cart with all fields successfully', async () => {
    const cartResult = await CartService.addItem({ items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE })
    const cartItems = cartResult.items
    cartItems.forEach((cartItem, index) => {
      expect(cartItem.variationId).toEqual(cartResult.items[index].variationId)
      expect(cartItem.quantity).toEqual(cartResult.items[index].quantity)
    })
  })

  it('Should add item and return cart with selected fields successfully', async () => {
    const cartResult = await CartService.addItem({ items: SINGLE_ITEM_TO_BE_ADDED_SAMPLE }, [...SELECTED_FIELDS])
    const cartResultFields = Object.keys(cartResult)
    expect(cartResultFields).toEqual(SELECTED_FIELDS)
    expect(cartResultFields.length).toEqual(SELECTED_FIELDS.length)
  })

  it('Should add multiple items and return cart with all fields successfully', async () => {
    const cartResult = await CartService.addItem({ items: MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE })
    expect(cartResult.items.length).toEqual(MULTIPLE_ITEMS_TO_BE_ADDED_SAMPLE.length)
  })

  it('Should try to add item with invalid variation_id and it should throw error', async () => {
    expect(async () => await CartService.addItem({ items: [{ variationId: 999, quantity: 1 }] })).rejects.toThrow
  })
})
