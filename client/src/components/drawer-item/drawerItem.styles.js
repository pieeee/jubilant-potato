import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  list: {
    width: '220px',
  },
  listItemButton: {
    borderLeft: '6px solid',
    borderColor: 'transparent',
    color: theme.palette.primary.main,
    transition: 'all .4s',
  },
  listItemButtonSelected: {
    borderLeft: '6px solid',
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
  },
}))
