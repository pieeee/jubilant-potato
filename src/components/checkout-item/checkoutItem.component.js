import { Avatar } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsTotalPrice } from '../../redux/cart/cart.selectors'

import { StyledTableRow, StyledTableCell } from './checkoutItem.styles'

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity },
  totalPrice,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell>
        <Avatar src={imageUrl} variant="rounded" />
      </StyledTableCell>
      <StyledTableCell>{name}</StyledTableCell>
      <StyledTableCell align="right">{price}</StyledTableCell>
      <StyledTableCell align="right">{quantity}</StyledTableCell>
      <StyledTableCell align="right">{quantity * price}</StyledTableCell>
    </StyledTableRow>
  )
}

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartItemsTotalPrice,
})

export default connect(mapStateToProps)(CheckoutItem)
