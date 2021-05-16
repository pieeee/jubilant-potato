import { takeEvery, call, put } from 'redux-saga/effects'
import { shopActionTypes } from './shop.action.types'
import { fetchCollectionsSuccess, fetchCollectionFailure } from './shop.action'
import {
  collectionSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'

export function* fetchCollectionsAsync() {
  const collectionRef = firestore.collection('collections')
  try {
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(collectionSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionFailure(collectionsMap))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
