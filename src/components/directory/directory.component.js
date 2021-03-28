import React from 'react'
import { Grid } from '@material-ui/core'
import { menuItemList } from './directory.data'
import { useStyles } from './directory.styles'
import MenuItem from '../menu-item/menuItem.component'

const Directory = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.directory}>
      {menuItemList.map(({ ...props }, i) => (
        <MenuItem {...props} key={i} />
      ))}
    </Grid>
  )
}

export default Directory