import {userActionTypes} from './user.action.types'

const initialSate = {
  currentUser: null,
}

export default (state = initialSate, { type, payload }) => {
  switch (type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}

