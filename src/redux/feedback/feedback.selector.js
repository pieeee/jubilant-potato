import { createSelector } from 'reselect'

const selectFeedback = (state) => state.feedback

export const selectFeedbackItem = createSelector(
  [selectFeedback],
  (feedback) => feedback.item
)

export const selectFeedbackShow = createSelector(
  [selectFeedback],
  (feedback) => feedback.show
)
