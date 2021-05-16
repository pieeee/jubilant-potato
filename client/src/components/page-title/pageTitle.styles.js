import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '600',
  },
  root: {
    padding: theme.spacing(2),
  },
  cardContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}))
