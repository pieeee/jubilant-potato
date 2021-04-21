import { createSelector } from 'reselect'

export const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

const selectCollectionUrlParam = ({}, { match }) =>
  match.params.collectionUrlParam

export const selectCollection = createSelector(
  [selectShopCollections, selectCollectionUrlParam],
  (collections, collectionUrlParam) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam
    )
)
