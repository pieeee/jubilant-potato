import React from 'react'
import { withRouter } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import clsx from 'clsx'

import { useStyles } from './drawerItem.styles'
import navMenus from '../header/header.data'

const DrawerItem = (props) => {
  const classes = useStyles()
  const { location, history, toggleDrawer } = props
  return (
    <div className={classes.list}>
      <List>
        {navMenus.map(({ name, path, Icon }, idx) => (
          <ListItem
            button
            key={idx}
            onClick={() => {
              history.push(path)
              toggleDrawer(false)
            }}
            className={clsx(classes.listItemButton, {
              [classes.listItemButtonSelected]: location.pathname === path,
            })}
          >
            <ListItemIcon>
              <Icon color="primary" />
            </ListItemIcon>
            <ListItemText primary={name} color="primary" />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default withRouter(DrawerItem)
