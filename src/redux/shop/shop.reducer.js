import { shopActionTypes } from './shop.action.types'
import { SHOP_DATA } from './shop.data'

const initialState = {
  collections: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: payload }
    default:
      return state
  }
}
