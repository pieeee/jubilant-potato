import { takeLatest, all, call, put } from 'redux-saga/effects'
import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
  checkUserSession,
} from './user.actions'
import { userActionTypes } from './user.action.types'
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils'

function* getUserSnapshot(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(signinFailure(error.message))
  }
}

function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield call(getUserSnapshot, user)
  } catch (error) {
    yield put(signinFailure(error.message))
  }
}

function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield call(getUserSnapshot, user)
  } catch (error) {
    yield put(signinFailure(error.message))
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (userAuth) {
      yield call(getUserSnapshot, userAuth)
    }
  } catch (error) {
    yield put(signinFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signoutSuccess())
  } catch (error) {
    yield put(signoutFailure())
  }
}

export function* signupWithEmailAndPassword({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield call(createUserProfileDocument, user, { displayName })
    yield put(signupSuccess())
  } catch (error) {
    yield put(signupFailure(error))
  }
}

export function* signupSuccessNext() {
  yield put(checkUserSession())
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle)
}

export function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signinWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignoutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signOut)
}

export function* onSignupStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signupWithEmailAndPassword)
}

export function* onSignupSuccess() {
  yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signupSuccessNext)
}

export default function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignupStart),
    call(onSignupSuccess),
  ])
}
