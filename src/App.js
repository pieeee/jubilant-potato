import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

import HomePage from './pages/home-page/home.page'
import ShopPage from './pages/shop-page/shop.page'
import Authentication from './pages/auth-page/auth.page'

import Header from './components/header/header.component'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#262239',
        light: '#f1f5ff',
      },
      secondary: {
        main: '#FFFFFF',
        light: '#f8324526',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 540,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)',
        },
      },
      MuiLink: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Authentication} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
