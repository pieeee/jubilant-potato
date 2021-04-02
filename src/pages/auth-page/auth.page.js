import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Signin from '../../components/auth/signin.component'
import Signup from '../../components/auth/signup.component'

import { useStyles } from './auth.styles'

const Authentication = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <div className={classes.signin}>
              <Signin />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {<Signup />}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Authentication
