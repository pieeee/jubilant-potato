import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './menuItem.styles'

const MenuItem = ({ title, path, imgURL }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div
        className={classes.menuItem}
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        <div className={classes.content}>
          <div className={classes.contentItem}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle1">Order Now</Typography>
          </div>
        </div>
      </div>
    </Grid>
  )
}

export default MenuItem
