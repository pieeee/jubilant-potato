import { Typography, Box, Link, Grid } from '@material-ui/core'
import React from 'react'
import CollectionItem from '../collection-items/collectionItem.component'
import { useStyles } from './collectionPreview.styles'

const CollectionPreview = ({ title, items }) => {
  const classes = useStyles()
  return (
    <div className={classes.CollectionPreview}>
      <Box
        display="flex"
        justifyContent="space-between"
        style={{ padding: '16px 0' }}
      >
        <Typography variant="h5">{title.toUpperCase()}</Typography>
        <Link href="#">See All</Link>
      </Box>
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

export default CollectionPreview
