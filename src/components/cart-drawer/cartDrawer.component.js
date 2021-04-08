import React from 'react'
import { Button, Card, Typography } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

import { useStyles } from './cartDrawer.styles'

const CartDropDown = () => {
  const classes = useStyles()
  return (
    <div className={classes.dropDownRoot}>
      <div className={classes.header}>
        <ShoppingCartOutlinedIcon />
        <Typography variant="h6">YOUR CART</Typography>
      </div>
      <div className={classes.dropDownItemsContainer}></div>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        className={classes.checkOutBtn}
      >
        Go to Checkout
      </Button>
    </div>
  )
}

export default CartDropDown
