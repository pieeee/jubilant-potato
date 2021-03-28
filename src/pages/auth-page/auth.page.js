import { Container } from '@material-ui/core'
import React from 'react'
import Signin from '../../components/signin/signin.component'

import { useStyles } from './auth.styles'

const Authentication = () => {
  const classes = useStyles()
  return (
    <div>
      <Container className={classes.root}>
        <Signin />
      </Container>
    </div>
  )
}

export default Authentication
