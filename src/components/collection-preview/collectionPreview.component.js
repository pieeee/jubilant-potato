import { Typography, Box, Link } from '@material-ui/core'
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
      <CollectionItem items={items} />
    </div>
  )
}

export default CollectionPreview
