import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  cartContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '240px',
    [theme.breakpoints.up('sm')]: {
      width: '340px',
    },
  },
  header: {
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-root': {
      margin: '0 8px',
    },
  },
  checkOutBtn: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 0,
    padding: theme.spacing(2),
  },
  root: {
    overflowY: 'auto',
    maxHeight: '88vh',
  },
}))
