import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
  },
  [theme.breakpoints.between('sm' ,'md')]: {
    signin: {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
    },
  },
  [theme.breakpoints.up('md')]: {
    signin: {
      padding: 0
    },
  },

}))
