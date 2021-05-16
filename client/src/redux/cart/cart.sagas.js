import { all, call, put, takeLatest } from 'redux-saga/effects'
import { userActionTypes } from '../user/user.action.types'
import { clearCart } from './cart.actions'

export function* clearCartOnSignout() {
  yield put(clearCart())
}

export function* onSignout() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout)
}

export function* cartSagas() {
  yield all([call(onSignout)])
}
