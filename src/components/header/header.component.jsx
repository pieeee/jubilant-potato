import React from 'react'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './header.styles'
import { withRouter } from 'react-router-dom'

import HideOnScroll from './hideOnScroll'

const Header = (props) => {
  const { location, history } = props
  const classes = useStyles()
  console.log(location)
  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky" color="primary">
        <Container className={classes.root}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            Crispy
          </Typography>

          <Box>
            <Button
              color="secondary"
              className={
                location.pathname === '/shop' && classes.buttonSelected
              }
              onClick={() => history.push('/shop')}
            >
              Shop
            </Button>
            <Button
              color="secondary"
              className={
                location.pathname === '/contact' && classes.buttonSelected
              }
              onClick={() => history.push('/contact')}
            >
              Contact
            </Button>
          </Box>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}

export default withRouter(Header)
