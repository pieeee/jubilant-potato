import { call, all } from 'redux-saga/effects'
import { fetchCollectionsStart } from './shop/shop.sagas'
import { showFeedback } from './feedback/feedback.sagas'

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(showFeedback)])
}
