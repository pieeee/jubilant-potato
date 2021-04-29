import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import { useStyles } from './menuItem.styles'

const MenuItem = ({ title, path, imgURL, match, history }) => {
  const classes = useStyles()
  const convertToRouteName = (title) =>
    title
      .replace(/\s/g, '_')
      .replace(/[{()}]/g, '')
      .toLowerCase()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div
        className={classes.menuItem}
        style={{ backgroundImage: `url(${imgURL})` }}
        onClick={() =>
          history.push(`${match.url}shop/${convertToRouteName(title)}`)
        }
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

export default withRouter(MenuItem)
