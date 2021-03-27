import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // boxShadow: '0px 0px 22px 9px rgba(0,0,0,0.09)',
    border: '0',
    borderRadius: '10px',
    '& .MuiCardContent-root': {
      padding: 0,
    },
    '& .MuiButtonBase-root': {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      padding: theme.spacing(1.5),
    },
    '& .MuiCardActionArea-root': {
      height: '100%',
      color: '#4d3ba56b',
    },
    position: 'relative',
    transition: 'all .4s',
    '&:hover': {
    //   transform: 'scale(1.1)',
      boxShadow: '0px 0px 22px 9px rgba(77, 59, 165,0.2)',
      zIndex: 1,
    },
  },
  media: {
    height: '200px',
    maxWidth: '100%',
    backgroundSize: 'contain',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& div': {
      width: '100%',
      height: '100%',
      padding: '8px 0',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
    },
  },
  priceTag: {
    fontWeight: 'bold',
    marginLeft: '16px',
  },
}))
