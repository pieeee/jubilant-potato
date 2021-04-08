import React, { useState } from 'react'
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
} from '@material-ui/core'
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'

import { useStyles } from './header.styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../redux/drawer/drawer.actions'

import HideOnScroll from './hideOnScroll'
import DrawerItem from '../drawer-item/drawerItem.component'
import navMenus from './header.data'
import CartIcon from '../cart-icon/cartIcon.component'

import { auth } from '../../firebase/firebase.utils'
import CartDropDown from '../cart-drawer/cartDrawer.component'

const Header = (props) => {
  // component state

  // global
  const { location, history } = props
  const classes = useStyles()

  const onSignout = () => {
    auth.signOut()
  }

  // drawer
  const toggleDrawer = (state, side) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    props.setDrawerOpen({ state, side })
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={props.drawerOpen.side === 'left' ? props.drawerOpen.state : false}
        onClose={toggleDrawer(false, 'left')}
      >
        <DrawerItem
          toggleDrawer={toggleDrawer()}
          currentUser={props.currentUser}
          onSignout={onSignout}
        />
      </Drawer>

      <Drawer
        anchor="right"
        open={
          props.drawerOpen.side === 'right' ? props.drawerOpen.state : false
        }
        onClose={toggleDrawer(false, 'right')}
      >
        <CartDropDown toggleDrawer={toggleDrawer()} />
      </Drawer>

      <HideOnScroll {...props}>
        <AppBar position="sticky" color="primary">
          <Container className={classes.root}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
              onClick={toggleDrawer(true, 'left')}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={() => history.push('/')}
            >
              Jubilant
            </Typography>

            <Box display="flex" alignItems="center">
              {navMenus
                .filter(
                  props.currentUser
                    ? ({ name }) => name !== 'Signin'
                    : ({ name }) => name !== 'Signout'
                )
                .map(({ name, path }, idx) => (
                  <Button
                    color="secondary"
                    className={clsx(classes.navButton, {
                      [classes.buttonSelected]: location.pathname === path,
                    })}
                    onClick={
                      name !== 'Signout'
                        ? () => history.push(path)
                        : () => onSignout()
                    }
                    key={idx}
                  >
                    {name}
                  </Button>
                ))}
              <CartIcon />
            </Box>
            {isWidthDown('sm', props.width) && <CartIcon />}
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setDrawerOpen: (open) => dispatch(setDrawerOpen(open)),
})

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  drawerOpen: state.drawer.drawerOpen,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withWidth()(Header)))
