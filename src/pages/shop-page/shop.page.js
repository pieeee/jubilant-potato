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
import { updateCollections } from '../../redux/shop/shop.action'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = await snapshotToMap(snapshot)
      updateCollections(collectionMap)
      setIsLoading(false)
    })
  }, [])

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionUrlParam`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (payload) => dispatch(updateCollections(payload)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
