import { Container } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selector'
import CartFeedback from '../cart-feedback/cartFeedback.component'
import CollectionPreview from '../collection-preview/collectionPreview.component'

const CollectionOverview = ({ collections }) => {
  return (
    <Container>
      <CartFeedback />
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
})

export default connect(mapStateToProps)(CollectionOverview)
