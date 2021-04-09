import React from 'react'
import { Button, List, Typography } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { useStyles } from './cartDrawer.styles'
import CartItem from '../cart-item/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropDown = ({ cartItems, history, toggleDrawer }) => {
  const classes = useStyles()
  return (
    <div className={classes.cartContainer}>
      <div className={classes.header}>
        <ShoppingCartOutlinedIcon />
        <Typography variant="h6">YOUR CART</Typography>
      </div>
      <List className={classes.root}>
        {cartItems.length ? (
          cartItems.map((cartItem, idx) => (
            <CartItem key={idx} item={cartItem} />
          ))
        ) : (
          <div className={classes.emptyCart}>
            <Typography variant="body2" color="primary" align="center">
              YOUR CART IS EMPTY
            </Typography>
          </div>
        )}
      </List>

      <Button
        fullWidth
        startIcon={<ArrowForwardIosIcon />}
        color="primary"
        variant="contained"
        disabled={cartItems.length ? false : true}
        className={classes.checkOutBtn}
        onClick={() => {
          history.push('/checkout')
          toggleDrawer(false, 'right')
        }}
      >
        Go to Checkout
      </Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
