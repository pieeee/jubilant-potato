import { Card, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-items/collectionItem.component'
import { selectCollection } from '../../redux/shop/shop.selector'
import CartFeedback from '../../components/cart-feedback/cartFeedback.component'
import { useStyles } from './collection.styles'
import PageTitle from '../../components/page-title/pageTitle.component'

const CollectionPage = ({ match, collection }) => {
  const classes = useStyles()


  return (
    <Container className={classes.container}>
      <CartFeedback />

      <PageTitle>{collection.title.toUpperCase()}</PageTitle>
      <Grid container spacing={2}>
        {collection.items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <CollectionItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const mapStateToProps = (state, props) => ({
  collection: selectCollection(state, props),
})

export default connect(mapStateToProps)(CollectionPage)
