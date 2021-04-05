import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({currentUser , hidden}) => (
    <nav className="nav">
        <ul className="nav-items">
            <li>
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>
            </li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><Link to="" >Contact</Link></li> 
            {   
                currentUser ?
                <li className="push-right clickable" onClick={() => auth.signOut()}>Sign Out</li>
                :
                <li className="push-right"><Link to="/sign-in" >Sign In</Link></li>
                 
            }
            <CartIcon />
        </ul>
        { hidden ? null : <CartDropdown />}
    </nav>
);

const mapStateToProps = ({user : {currentUser} , cart : {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);