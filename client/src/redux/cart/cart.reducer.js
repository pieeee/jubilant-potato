import { cartActionTypes } from './cart.action.types'
import { addItemToCart, dropItemFromCart } from './cart.utils'

const initialState = {
  cartItems: [],
  cartItemAddFeedback: {
    open: false,
    items: [],
  },
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
    case cartActionTypes.HIDE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === payload.id ? { ...cartItem, show: false } : cartItem
        ),
      }
    }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}
