import { cartActionTypes } from './cart.action.types'
import { addItemToCart, dropItemFromCart } from './cart.utils'

const initialState = {
  cartItems: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) }

    case cartActionTypes.DROP_ITEM:
      return {
        ...state,
        cartItems: dropItemFromCart(state.cartItems, payload),
      }

    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      }
    default:
      return state
  }
}
