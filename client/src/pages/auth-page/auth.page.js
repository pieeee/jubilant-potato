import { Container, Grid } from '@material-ui/core'
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth'
import React, { useState, useEffect } from 'react'
import Signin from '../../components/auth/signin.component'
import Signup from '../../components/auth/signup.component'

import { useStyles } from './auth.styles'

const Authentication = (props) => {
  const [componentState, setComponentState] = useState({
    renderSignUp: true,
    redirectLink: false,
    switchComponent: false,
  })

  const onSwitchComponent = () => {
    setComponentState({
      ...componentState,
      switchComponent: !componentState.switchComponent,
    })
  }
  const onWidthChange = () => {
    isWidthDown('md', props.width) &&
      setComponentState({
        ...componentState,
        renderSignUp: false,
        redirectLink: true,
      })

    isWidthUp('md', props.width) &&
      setComponentState({
        renderSignUp: true,
        redirectLink: false,
        switchComponent: false,
      })
  }

  useEffect(() => {
    onWidthChange()
  }, [props.width])

  const classes = useStyles()
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <div className={classes.signin}>
              {!componentState.switchComponent ? (
                <Signin
                  redirectLink={componentState.redirectLink}
                  onSwitchComponent={onSwitchComponent}
                />
              ) : (
                <Signup
                  redirectLink={componentState.redirectLink}
                  onSwitchComponent={onSwitchComponent}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {componentState.renderSignUp && <Signup />}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default withWidth()(Authentication)
