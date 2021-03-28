import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

import HomePage from './pages/home-page/home.page'
import ShopPage from './pages/shop-page/shop.page'
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
    overrides: {
      MuiAppBar: {
        root: {
          transform: 'translateZ(0)',
        },
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
