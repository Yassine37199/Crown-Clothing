import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceCents = price * 100;
    const publishableKey = "pk_test_51Ij9JKIfeInIt8q2IuDaIrYgIfitpvKYzu3Sm8m2aQto7kaqVtqnPWt0vgsZSOAgEmu00y9vZpV9Luz35DXNfoXY00Ol4gKGcf"
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceCents}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;