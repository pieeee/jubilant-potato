import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {
  Card,
  Container,
  TableCell,
  TableFooter,
  Typography,
} from '@material-ui/core'
import { useStyles, StyledTableCell } from './checkout.styles'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartItemsTotalPrice,
} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkoutItem.component'
import { tableHeadItems } from './checkout.data'

const CheckoutPage = ({ cartItems, totalPrice, itemCount }) => {
  const classes = useStyles()

  /**
   * @desc RENDERING TABLE HEADER
   */
  const renderTableHead = (
    <TableHead>
      <TableRow>
        {tableHeadItems.map(({ name, width, align }) => (
          <StyledTableCell key={name} align={align} style={{ width }}>
            {name}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )

  /**
   * @desc RENDERING TABLE FOOTER
   */
  const renderTableFooter = (
    <TableFooter>
      <TableRow>
        <StyledTableCell colSpan={3} />
        <StyledTableCell align="right" className={classes.totalPrice}>
          TOTAL:
        </StyledTableCell>
        <StyledTableCell align="center" className={classes.totalPrice}>
          ${totalPrice}
        </StyledTableCell>
      </TableRow>
    </TableFooter>
  )

  /**
   * @desc RENDERING EMPTY CART MESSAGE
   */
  const renderEmptyCartMessage = (
    <TableBody>
      <TableRow>
        <TableCell
          className={classes.emptyCartMessage}
          align="center"
          colSpan={6}
        >
          <Typography variant="subtitle1" color="primary">
            YOUR CART IS EMPTY
          </Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  )

  return (
    <Container>
      <Typography className={classes.pageTitle} variant="h5">
        SHOPPING CART ({itemCount} ITEMS)
      </Typography>
      <TableContainer className={classes.tableContainer} component={Card}>
        <Table className={classes.table} aria-label="customized table">
          {renderTableHead}
          {cartItems.length ? (
            <>
              <TableBody>
                {cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </TableBody>
              {renderTableFooter}
            </>
          ) : (
            renderEmptyCartMessage
          )}
        </Table>
      </TableContainer>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
  itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps)(CheckoutPage)
