import { Container } from '@material-ui/core'
import React from 'react'
import CollectionPreview from '../../components/collection-preview'
import { SHOP_DATA } from './meta'
import { useStyles } from './styles'

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
