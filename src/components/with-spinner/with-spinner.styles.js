import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    height: '5px',
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.feedback.light,
    },
  },
}))
