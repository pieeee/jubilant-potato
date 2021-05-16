import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& .MuiBox-root': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },

  title: {
    cursor: 'pointer',
    padding: theme.spacing(1.802),
  },

  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  //   NavLinks
  navButton: {
    padding: theme.spacing(2),
    opacity: '.7',
    borderRadius: 0,
    borderBottom: '5px solid transparent',
    transition: 'all .3s',
    '&:hover': {
      opacity: 1,
    },
  },
  buttonSelected: {
    opacity: '1 !important',
    borderBottom: '5px solid white !important',
  },
}))
