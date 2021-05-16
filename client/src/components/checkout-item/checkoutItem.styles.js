import { makeStyles, withStyles, TableCell, TableRow } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  quantityIcons: {
    width: '20px',
    height: '20px',
  },
}))

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell)

export const StyledTableRow = withStyles((theme) => ({
  root: {},
}))(TableRow)
