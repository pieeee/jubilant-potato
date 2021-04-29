import { Typography, Box, Link, Grid, Card } from '@material-ui/core'
import React from 'react'
import CollectionItem from '../collection-items/collectionItem.component'
import { useStyles } from './collectionPreview.styles'
import { withRouter } from 'react-router-dom'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  const classes = useStyles()

  return (
    <div className={classes.CollectionPreview}>
      <Card className={classes.title} elevation={0}>
        <Typography variant="h5" color="primary">
          {title.toUpperCase()}
        </Typography>
        <Link onClick={() => history.push(`${match.path}/${routeName}`)}>
          See All
        </Link>
      </Card>
      <Grid container spacing={2}>
        {items
          .filter(({}, idx) => idx < 4)
          .map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <CollectionItem item={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default withRouter(CollectionPreview)
