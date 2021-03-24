import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  menuItem: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '240px;',
    border: '1px solid',
    borderRadius: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    border: '1px solid',
    borderRadius: theme.spacing(1),
    minWidth: '150px',
    width: '33%',
    padding: theme.spacing(2),
  },
}))
