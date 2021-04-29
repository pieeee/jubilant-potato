import { shopActionTypes } from './shop.action.types'
export const updateCollections = (payload) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload,
})
