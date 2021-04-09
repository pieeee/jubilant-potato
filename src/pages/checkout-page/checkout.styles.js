import { makeStyles, TableCell, withStyles, TableRow } from '@material-ui/core'

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

export const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(8),
  },
  table: {
    minWidth: 700,
  },
  total: {
    marginTop: theme.spacing(4),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
