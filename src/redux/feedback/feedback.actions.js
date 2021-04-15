import { feedbackActionTypes } from './feedback.action.types'

export const addItemToFeedbackQueue = (payload) => ({
  type: feedbackActionTypes.ADD_ITEM_TO_FEEDBACK_QUEUE,
  payload,
})

export const removeItemfromFeedbackQueue = (payload) => ({
  type: feedbackActionTypes.REMOVE_ITEM_FROM_FEEDBACK_QUEUE,
  payload,
})

export const renderFeedback = (payload) => ({
  type: feedbackActionTypes.RENDER_FEEDBACK,
  payload,
})
