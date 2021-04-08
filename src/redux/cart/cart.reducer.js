import { cartActionTypes } from "./cart.action.types"
import { addItemToCart } from "./cart.utils"

const initialState = {
    cartItems: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case cartActionTypes.ADD_ITEM:
        return { ...state, cartItems: addItemToCart(state.cartItems, payload) }

    default:
        return state
    }
}
