import React from 'react'
import {
  AppBar,
  Container,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
} from '@material-ui/core'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import { setDrawerOpen } from '../../redux/drawer/drawer.actions'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectDrawerOpen } from '../../redux/drawer/drawer.selector'
import { useStyles } from './header.styles'
import DrawerItem from '../drawer-item/drawerItem.component'
import navMenus from './header.data'
import CartIcon from '../cart-icon/cartIcon.component'
import CartDropDown from '../cart-drawer/cartDrawer.component'

const Header = (props) => {
  const classes = useStyles()
  const { location, history } = props

  const onSignout = () => {
    auth.signOut()
  }

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
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setDrawerOpen: (open) => dispatch(setDrawerOpen(open)),
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  drawerOpen: selectDrawerOpen,
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(withWidth()(Header))
)
