import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { auth } from './firebase/firebase.utils'

import HomePage from './pages/home-page/home.page'
import ShopPage from './pages/shop-page/shop.page'
import Authentication from './pages/auth-page/auth.page'

import Header from './components/header/header.component'

import { customConfig } from './mui.custom'

function App() {
  const [state, setstate] = useState({
    currentUser: null,
  })

  const theme = createMuiTheme(customConfig)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setstate({ currentUser: user })
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header currentUser={state.currentUser} />
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
