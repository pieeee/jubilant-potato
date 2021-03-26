import React from 'react'
import { Grid } from '@material-ui/core'
import { menuItemList } from './meta'
import { useStyles } from './styles'
import MenuItem from '../menu-item'

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
