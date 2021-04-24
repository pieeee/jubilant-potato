import React, { useEffect } from 'react'
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

const ShopPage = ({ match, updateCollections }) => {
  const classes = useStyles()

  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = await snapshotToMap(snapshot)
      updateCollections(collectionMap)
    })
  }, [])

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionUrlParam`}
        component={CollectionPage}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (payload) => dispatch(updateCollections(payload)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
