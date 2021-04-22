import React from 'react'
import {connect} from 'react-redux'
import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'

import './checkout.styles.scss'
import CheckoutItem from '../../Components/checkout-item/checkout-item.component'
import StripeCheckout from 'react-stripe-checkout'
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button.component'



const CheckoutPage = ({cartItems , cartItemsTotal}) => (

    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span >Product</span>
            </div>
            <div className="header-block">
                <span >Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span >Price</span>
            </div>
            <div className="header-block">
                <span >Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">
            <span>TOTAL : ${cartItemsTotal}</span>
            </div>
        <div className="test-warning">
            *Please use the following test credit card for payements*
            <br />
            Visa : 4242 4242 4242 4242 - Exp : 05/21 - CVV : 123
        </div>
        <StripeCheckoutButton price={cartItemsTotal} />
    </div>
 


)


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartItemsTotal : selectCartItemsTotal
})

export default connect(mapStateToProps , null)(CheckoutPage)