import { Card, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './pageTitle.styles'

const PageTitle = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.root} elevation={0}>
        <Typography
          variant="h5"
          color="primary"
          align="center"
          className={classes.title}
        >
          {children}
        </Typography>
      </Card>
    </div>
  )
}

export default PageTitle
