import React from 'react'
import { withRouter } from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import { useStyles } from './drawerItem.styles'

import items from './drawerItem.data'

const DrawerItem = (props) => {
  const classes = useStyles()
  const { location, history, toggleDrawer } = props
  return (
    <div className={classes.list}>
      <List>
        {items.map(({ name, path, Icon }, idx) => (
          <ListItem
            button
            key={idx}
            onClick={() => {
              history.push(path)
              toggleDrawer(false)
            }}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default withRouter(DrawerItem)
