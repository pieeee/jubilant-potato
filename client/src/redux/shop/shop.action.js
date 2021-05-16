import {
  collectionSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils'
import { shopActionTypes } from './shop.action.types'

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload,
})

export const fetchCollectionFailure = (payload) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload,
})

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection('collections')
    try {
      dispatch(fetchCollectionsStart())
      const snapshot = await collectionRef.get()
      const collectionMap = collectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionMap))
    } catch (error) {
      dispatch(fetchCollectionFailure(error.message))
    }
  }
}
