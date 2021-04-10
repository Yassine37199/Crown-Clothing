import React from 'react'
import {ReactComponent as ShoppingCart } from '../../Assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart.actions'



const CartIcon = ({toggleCartHidden , itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingCart className="shopping-icon"></ShoppingCart>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart : {cartItems} }) => ({
    itemCount : cartItems.reduce(
        (accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity , 0)
})
 
export default connect(mapStateToProps , mapDispatchToProps)(CartIcon);



