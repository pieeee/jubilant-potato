import { Button } from '@material-ui/core'
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useStyles } from './stripeButton.styles'
import PaymentIcon from '@material-ui/icons/Payment'
import axios from 'axios'

const StripeButton = ({ price }) => {
  const classes = useStyles()

  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51IWkh7FpObJBwKpDLobxkKX1ja9A5P8NSEKCbrXo1nQ2squM50hH4Ci3UIp1TOwZmkIydEJB5S6urku3kjguHDiC007zApE4IC'

  const onToken = (token) => {
    axios
      .post('/payment', {
        amount: priceForStripe,
        token,
      })
      .then((res) => alert('Payment Successfull'))
      .catch((err) => {
        console.log(err)
        alert('Payment Failed')
      })
  }

  return (
    <div className={classes.buttonContainer}>
      <StripeCheckout
        name="JUBILANT POTATO Ltd."
        billingAddress
        shippingAddress
        image="https://res.cloudinary.com/piedev/image/upload/v1618950131/jubilant-potato/Logo/JUBILANT_utqw0s.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      >
        <Button color="primary" variant="contained" fullWidth size="large">
          <PaymentIcon className={classes.icon} />
          PAY NOW
        </Button>
      </StripeCheckout>
    </div>
  )
}

export default StripeButton
