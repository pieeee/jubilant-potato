import { cartActionTypes } from "./cart.action.types"

const initialState = {
    cartItems: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case cartActionTypes.ADD_ITEM:
        return { ...state, cartItems: [...state.cartItems, payload] }

    default:
        return state
    }
}
