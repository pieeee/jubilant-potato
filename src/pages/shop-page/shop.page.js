import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selector'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action'
import CollectionsOverviewContainer from '../../components/collection-overview/collectionsOverview.container'
import CollectionPageContainer from '../../pages/category/collection.container'

const ShopPage = ({ match, fetchCollections, collections }) => {
  useEffect(() => {
    if (!collections) {
      fetchCollections()
    }
  }, [])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionUrlParam`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
