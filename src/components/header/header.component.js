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
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './header.styles'
import { withRouter } from 'react-router-dom'

import HideOnScroll from './hideOnScroll'
import DrawerItem from '../drawer-item/drawerItem.component'
import navMenus from './header.data'

import { auth } from '../../firebase/firebase.utils'

const Header = (props) => {
  // component state

  // global
  const { location, history } = props
  const classes = useStyles()

  const onSignout = () => {
    auth.signOut()
  }

  // drawer
  const [drawerState, setDrawerState] = useState(false)
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerState(open)
  }

  return (
    <>
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
        <DrawerItem
          toggleDrawer={toggleDrawer()}
          currentUser={props.currentUser}
          onSignout={onSignout}
        />
      </Drawer>
      <HideOnScroll {...props}>
        <AppBar position="sticky" color="primary">
          <Container className={classes.root}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
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

            <Box>
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
            </Box>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default withRouter(Header)
