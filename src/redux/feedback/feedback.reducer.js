import { feedbackActionTypes } from './feedback.action.types'

const initialState = {
  feedbackQueue: [],
  renderFeedback: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case feedbackActionTypes.ADD_ITEM_TO_FEEDBACK_QUEUE:
      return { ...state, feedbackQueue: [...state.feedbackQueue, payload] }

    case feedbackActionTypes.REMOVE_ITEM_FROM_FEEDBACK_QUEUE:
      return {
        ...state,
        feedbackQueue: state.feedbackQueue.filter(
          (item) => item.time !== payload
        ),
      }

    case feedbackActionTypes.RENDER_FEEDBACK:
      return { ...state, renderFeedback: payload }

    default:
      return state
  }
}
