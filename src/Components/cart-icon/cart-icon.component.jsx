import React from 'react'
import {ReactComponent as ShoppingCart } from '../../Assets/shopping-bag.svg'
import './cart-icon.styles.scss'



const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingCart className="shopping-icon"></ShoppingCart>
        <span className="item-count">0</span>
    </div>
)


export default CartIcon;



