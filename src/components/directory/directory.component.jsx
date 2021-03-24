import React from 'react'
import { Grid } from '@material-ui/core'
import { menuItemList } from './directory.data'
import { useStyles } from './directory.styles'
import MenuItem from '../menu-item/menuItem.component'

const Directory = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.directory}>
      {menuItemList.map((menuItem) => (
        <MenuItem title={menuItem.title} path={menuItem.path} />
      ))}
    </Grid>
  )
}

export default Directory
