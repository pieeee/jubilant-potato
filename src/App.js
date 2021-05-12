import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import HomePage from './pages/home-page/home.page'
import ShopPage from './pages/shop-page/shop.page'
import Authentication from './pages/auth-page/auth.page'
import Header from './components/header/header.component'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { customConfig } from './mui.custom'
import CheckoutPage from './pages/checkout-page/checkout.page'

function App(props) {
  const { checkUserSession, currentUser } = props

  const theme = createMuiTheme(customConfig)

  useEffect(() => {
    checkUserSession()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/** NAVIGATION BAR */}
      <Header />

      {/** ROUTING */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
