import { put, takeLatest, delay } from 'redux-saga/effects'
import { addItemToFeedback, closeFeedback } from './feedback.actions'
import { feedbackActionTypes } from './feedback.action.types'

export function* feedbackAction({ payload }) {
  yield put(addItemToFeedback(payload))
  yield delay(3000)
  yield put(closeFeedback())
}

export function* showFeedback() {
  yield takeLatest(feedbackActionTypes.SHOW_FEEDBACK, feedbackAction)
}
