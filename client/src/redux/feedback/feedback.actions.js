import { feedbackActionTypes } from './feedback.action.types'

export const showFeedback = (payload) => ({
  type: feedbackActionTypes.SHOW_FEEDBACK,
  payload,
})

export const addItemToFeedback = (payload) => ({
  type: feedbackActionTypes.ADD_FEEDBACK,
  payload,
})

export const closeFeedback = () => ({
  type: feedbackActionTypes.CLOSE_FEEDBACK,
})
