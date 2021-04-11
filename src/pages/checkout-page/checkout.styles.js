import { makeStyles, TableCell, withStyles, TableRow } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  pageTitle: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    fontWeight: '600',
  },
  table: {
    minWidth: 700,
  },
  emptyCartMessage: {
    padding: theme.spacing(4),
  },
  totalPrice: {
    color: theme.palette.primary.main,
    fontSize: '16px',
  },
}))

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
}))(TableCell)
