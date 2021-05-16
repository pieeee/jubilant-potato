import { Avatar, IconButton, Slide } from '@material-ui/core'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

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
  hideItem,
} from '../../redux/cart/cart.actions'

const CheckoutItem = ({
  cartItem,
  removeItem,
  dropItem,
  addItem,
  hideItem,
}) => {
  const classes = useStyles()

  const { name, imageUrl, price, quantity, show } = cartItem

  const handleChange = () => {
    hideItem(cartItem)
    setTimeout(() => {
      removeItem(cartItem)
    }, 300)
  }

  return (
    <Slide direction="left" timeout={300} in={show}>
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
          <IconButton color="primary" onClick={() => handleChange()}>
            <DeleteIcon />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
    </Slide>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  dropItem: (item) => dispatch(dropItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  hideItem: (item) => dispatch(hideItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
