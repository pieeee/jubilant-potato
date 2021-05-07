import { shopActionTypes } from './shop.action.types'


const initialState = {
  isFetching: true,
  collections: null,
  errorMessage: undefined,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true }
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: payload }
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: payload }
    default:
      return state
  }
}
