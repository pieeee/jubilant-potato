import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './directory.styles'
import MenuItem from '../menu-item/menuItem.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={2} className={classes.directory}>
      {sections.map(({ ...props }, i) => (
        <MenuItem {...props} key={i} />
      ))}
    </Grid>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
