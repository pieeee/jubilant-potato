import { createSelector } from 'reselect'

const selectFeedback = (state) => state.feedback

export const selectFeedbackQueue = createSelector(
  [selectFeedback],
  (feedback) => feedback.feedbackQueue
)

export const selectRenderFeedback = createSelector(
  [selectFeedback],
  (feedback) => feedback.renderFeedback
)
