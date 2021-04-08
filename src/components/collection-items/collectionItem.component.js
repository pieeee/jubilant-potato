import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import { useStyles } from './collectionItem.styles'

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item
  const classes = useStyles()
  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent className={classes.content}>
          <div>
            <Typography color="primary" variant="body2">
              {name}
            </Typography>
            <Typography
              color="primary"
              variant="body2"
              className={classes.priceTag}
            >
              ${price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>

      <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={() => addItem(item)}
      >
        Add To Cart
      </Button>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
