import { userActionTypes } from './user.action.types'

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
})

export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
})

export const emailSigninStart = (payload) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload,
})

export const signinSuccess = (payload) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload,
})

export const signinFailure = (payload) => ({
  type: userActionTypes.SIGNIN_FAILURE,
  payload,
})

export const signoutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
})

export const signoutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
})

export const signoutFailure = (payload) => ({
  type: type,
  payload,
})

export const signupStart = (payload) => ({
  type: userActionTypes.SIGNUP_START,
  payload,
})

export const signupSuccess = () => ({
  type: userActionTypes.SIGNUP_SUCCESS,
})

export const signupFailure = (payload) => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload,
})
