import React, { useEffect, useState } from 'react'
import CollectionOverview from '../../components/collection-overview/collectionOverview.component'
import { useStyles } from './shop.styles'
import { Route } from 'react-router-dom'
import CollectionPage from '../category/collection.page'
import {
  firestore,
  collectionSnapshotToMap as snapshotToMap,
} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../../redux/shop/shop.selector'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, isFetching, fetchCollections }) => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCollections()
  }, [])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionUrlParam`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isFetching} {...props} />
        )}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
