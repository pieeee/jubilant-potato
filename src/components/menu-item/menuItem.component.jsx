import React from 'react'
import { Grid, Typography, Link } from '@material-ui/core'
import { useStyles } from './menuItem.styles'

const MenuItem = ({ title, path }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className={classes.menuItem}>
        <div className={classes.content}>
          <Typography variant="h4">{title}</Typography>
          <Link href="#">Order Now</Link>
        </div>
      </div>
    </Grid>
  )
}

export default MenuItem
