import { Card, Typography, Slide } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useStyles } from './cartFeedback.styles'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { selectFeedbackQueue } from '../../redux/feedback/feedback.selector'
import { removeItemfromFeedbackQueue } from '../../redux/feedback/feedback.actions'

const CartFeedback = ({ feedbackQueue, removeItemfromFeedbackQueue }) => {
  const classes = useStyles()

  const [temp, setTemp] = useState('')

  const autoHide = () => {
    setTimeout(() => {
      removeItemfromFeedbackQueue(feedbackQueue[0].time)
    }, 3000)
  }

  useEffect(() => {
    if (feedbackQueue.length === 1) {
      setTemp(feedbackQueue[0].name)
      autoHide()
    } else if (feedbackQueue.length > 1) {
      clearTimeout(autoHide)
      removeItemfromFeedbackQueue(feedbackQueue[0].time)
    } else {
      return
    }
  }, [feedbackQueue])

  return (
    <React.Fragment>
      <Slide direction="left" in={feedbackQueue.length !== 0 ? true : false}>
        <Card elevation={6} color="success" className={classes.root}>
          <CheckCircleOutlineIcon />
          <Typography variant="body2">
            <strong>
              {feedbackQueue.length !== 0
                ? `${feedbackQueue[0].name} `
                : `${temp} `}
            </strong>
            is added to the cart
          </Typography>
        </Card>
      </Slide>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeItemfromFeedbackQueue: (time) =>
    dispatch(removeItemfromFeedbackQueue(time)),
})

const mapStateToProps = createStructuredSelector({
  feedbackQueue: selectFeedbackQueue,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartFeedback)
