import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'

import {
  StyledTableRow,
  StyledTableCell,
  useStyles,
} from './checkoutItem.styles'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  dropItem,
  removeItemFromCart,
  addItem,
} from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, removeItem, dropItem, addItem }) => {
  const classes = useStyles()

  const { name, imageUrl, price, quantity } = cartItem

  return (
    <StyledTableRow>
      <StyledTableCell align="center">
        <Avatar src={imageUrl} variant="rounded" />
      </StyledTableCell>
      <StyledTableCell>{name}</StyledTableCell>
      <StyledTableCell align="center">$ {price}</StyledTableCell>
      <StyledTableCell align="center">
        <IconButton color="primary" onClick={() => dropItem(cartItem)}>
          <ArrowBackIosIcon className={classes.quantityIcons} />
        </IconButton>
        {quantity}
        <IconButton color="primary" onClick={() => addItem(cartItem)}>
          <ArrowForwardIosIcon className={classes.quantityIcons} />
        </IconButton>
      </StyledTableCell>
      <StyledTableCell align="center">$ {quantity * price}</StyledTableCell>
      <StyledTableCell align="center">
        <IconButton color="primary" onClick={() => removeItem(cartItem)}>
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  dropItem: (item) => dispatch(dropItem(item)),
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
