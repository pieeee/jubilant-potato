import { Container } from '@material-ui/core'
import React from 'react'
import CollectionPreview from '../../components/collection-preview/collectionPreview.component'
import { SHOP_DATA } from './shop.data'
import { useStyles } from './shop.styles'

const ShopPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.shopBody}>
      <Container>
        {SHOP_DATA.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </Container>
    </div>
  )
}

export default ShopPage
