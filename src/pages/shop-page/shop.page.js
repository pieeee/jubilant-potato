import React from 'react'
import CollectionOverview from '../../components/collection-overview/collectionOverview.component'
import { useStyles } from './shop.styles'
import { Route } from 'react-router-dom'
import CollectionPage from '../category/collection.page'

const ShopPage = ({ match }) => {
  const classes = useStyles()

  console.log(match.path)
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

export default ShopPage
