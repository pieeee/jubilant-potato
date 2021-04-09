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
import { useStyles } from './cartItem.styles'

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  const classes = useStyles()
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={imageUrl} alt={name} variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        multiline
        dense
        primary={name}
        secondary={`${quantity} x $${price}`}
      />
      <ListItemSecondaryAction>
        <IconButton color="primary">
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default CartItem
