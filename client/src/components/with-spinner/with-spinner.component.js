import { LinearProgress } from '@material-ui/core'
import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { useStyles } from './with-spinner.styles'

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    const classes = useStyles()

    return isLoading ? (
      <LinearProgress className={classes.root} />
    ) : (
      <WrappedComponent {...otherProps} />
    )
  }
  return Spinner
}

export default WithSpinner
