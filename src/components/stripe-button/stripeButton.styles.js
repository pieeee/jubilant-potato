import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    '& span': {
      width: '100%',
      maxWidth: 250,
    },

    [theme.breakpoints.down('xs')]: {
      '& span': {
        width: '100%',
        maxWidth: '100%',
      },
    },
  },

  icon: {
    marginRight: theme.spacing(1),
  },
}))
