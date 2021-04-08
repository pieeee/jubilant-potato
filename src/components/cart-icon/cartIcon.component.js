import React from 'react'
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../redux/drawer/drawer.actions'

import { Badge, IconButton } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const CartIcon = (props) => {
  return (
    <div>
      <IconButton
        aria-label="cart"
        color="secondary"
        onClick={() => props.setDrawerOpen({ state: true, side: 'right' })}
      >
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartOutlinedIcon fontSize="inherit" />
        </Badge>
      </IconButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setDrawerOpen: (open) => dispatch(setDrawerOpen(open)),
})


export default connect(null, mapDispatchToProps)(CartIcon)
