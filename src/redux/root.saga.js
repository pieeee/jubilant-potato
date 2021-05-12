import { call, all } from 'redux-saga/effects'
import { fetchCollectionsStart } from './shop/shop.sagas'
import { showFeedback } from './feedback/feedback.sagas'
import userSagas from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(showFeedback),
    call(userSagas),
    call(cartSagas),
  ])
}
