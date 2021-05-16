import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    zIndex: 5,
    margin: '20px 20px 0',
    backgroundColor: theme.palette.feedback.light,
    textTransform: 'uppercase',
    color: 'white',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
}))
