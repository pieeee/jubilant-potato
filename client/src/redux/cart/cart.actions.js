import { cartActionTypes } from './cart.action.types'

export const addItem = (payload) => ({
  type: cartActionTypes.ADD_ITEM,
  payload,
})

export const dropItem = (payload) => ({
  type: cartActionTypes.DROP_ITEM,
  payload,
})

export const removeItemFromCart = (payload) => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload,
})

export const hideItem = (payload) => ({
  type: cartActionTypes.HIDE_ITEM,
  payload,
})

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
})
