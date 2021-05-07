import { Card, Typography, Slide } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useStyles } from './cartFeedback.styles'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import {
  selectFeedbackItem,
  selectFeedbackShow,
} from '../../redux/feedback/feedback.selector'

const CartFeedback = ({ feedback, show }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Slide direction="left" in={show}>
        <Card elevation={6} color="success" className={classes.root}>
          <CheckCircleOutlineIcon />
          <Typography variant="body2">
            <strong>{feedback !== undefined ? feedback.name : null}</strong>
            is added to the cart
          </Typography>
        </Card>
      </Slide>
    </React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  feedback: selectFeedbackItem,
  show: selectFeedbackShow,
})

export default connect(mapStateToProps)(CartFeedback)
