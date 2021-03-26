import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/home-page'
import ShopPage from './pages/shop-page'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#262239',
        light: '#393e46',
      },
      secondary: {
        main: '#f83245',
        light: '#f8324526',
      },
      //   background: {
      //     default: '#f4f5fd',
      //   },
    },
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)',
        },
      },
    },
    props: {
      MuiIconButton: {
        disableRipple: true,
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
