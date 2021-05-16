import React from 'react'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import { connect } from 'react-redux'
import { removeItemFromCart } from '../../redux/cart/cart.actions'

const CartItem = ({ item, removeItem }) => {
  const { name, imageUrl, price, quantity } = item

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={imageUrl} alt={name} variant="rounded" />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`${quantity} x $${price}`} />
      <ListItemSecondaryAction>
        <IconButton color="primary" onClick={() => removeItem(item)}>
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CartItem)
