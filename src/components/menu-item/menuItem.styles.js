import { makeStyles } from '@material-ui/core'

const transition = 'all 0.7s'

export const useStyles = makeStyles((theme) => ({
  menuItem: {
    textAlign: 'center',
    height: '240px;',
    borderRadius: theme.spacing(0.5),
    backgroundPosition: 'center',
    backgroundSize: '150%',
    overflow: 'hidden',
    transition: `${transition} ease-in-out`,
    '&:hover': {
      cursor: 'pointer',
      backgroundSize: '170%',
    },
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000088',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition,
    '&:hover': {
      backgroundColor: '#00000057',
      '& div': {
        borderBottom: '4px solid white',
        opacity: '1',
      },
    },
  },
  contentItem: {
    '& .MuiTypography-h4': {
      marginBottom: theme.spacing(1),
    },
    borderBottom: '4px solid transparent',
    transition,
    opacity: '.7',
    padding: '0 24px 16px',
    color: 'white',
  },
}))
