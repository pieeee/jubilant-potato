import { feedbackActionTypes } from './feedback.action.types'

const initialState = {
  item: undefined,
  show: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.ADD_FEEDBACK:
      return { ...state, item: payload, show: true }

    case feedbackActionTypes.CLOSE_FEEDBACK:
      return { ...state, show: false }

    default:
      return state
  }
}
