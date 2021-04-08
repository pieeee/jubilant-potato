import { cartActionTypes } from "./cart.action.types";

export const addItem = (payload) => ({
  type: cartActionTypes.ADD_ITEM,
  payload,
})
