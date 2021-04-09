import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Container, Typography } from '@material-ui/core'

import { useStyles, StyledTableCell, StyledTableRow } from './checkout.styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartItemsTotalPrice,
} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkoutItem.component'

const CheckoutPage = ({ cartItems, totalPrice }) => {
  const classes = useStyles()

  return (
    <Container>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>IMAGE</StyledTableCell>
              <StyledTableCell>PRODUCT</StyledTableCell>
              <StyledTableCell align="right">UNIT PRICE ($)</StyledTableCell>
              <StyledTableCell align="right">QUANTITY (pc)</StyledTableCell>
              <StyledTableCell align="right">PRICE ($)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.total}>
        <Typography color="primary" variant="h6">
          TOTAL: ${totalPrice}
        </Typography>
      </div>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
