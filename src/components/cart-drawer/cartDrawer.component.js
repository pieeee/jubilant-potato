import React from 'react'
import { Button, List, Typography } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { connect } from 'react-redux'

import { useStyles } from './cartDrawer.styles'
import CartItem from '../cart-item/cartItem.component'

const CartDropDown = ({ cartItems }) => {
  const classes = useStyles()
  return (
    <div className={classes.cartContainer}>
      <div className={classes.header}>
        <ShoppingCartOutlinedIcon />
        <Typography variant="h6">YOUR CART</Typography>
      </div>

      <List className={classes.root}>
        {cartItems.map((cartItem, idx) => (
          <CartItem key={idx} item={cartItem} />
        ))}
      </List>

      <Button
        fullWidth
        startIcon={<ArrowForwardIosIcon />}
        color="primary"
        variant="contained"
        className={classes.checkOutBtn}
      >
        Go to Checkout
      </Button>
    </div>
  )
}

const mapDispatchToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
})

export default connect(mapDispatchToProps)(CartDropDown)
