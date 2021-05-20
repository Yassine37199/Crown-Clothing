import React from 'react';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect'
import { 
    HeaderContainer, 
    LogoContainer,
    OptionLink, 
    OptionsContainer} 
from './header.styles';


const Header = ({currentUser , hidden}) => (
    <HeaderContainer>
        <LogoContainer  to="/" >
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop" >
                Shop
            </OptionLink>
            <OptionLink to="" >
                Contact
            </OptionLink>
        {   
            currentUser ? (
            <OptionLink as='div' onClick={() => auth.signOut()}>
                Sign Out
            </OptionLink>)
            :
            (<OptionLink to="/sign-in" >
                Sign In
            </OptionLink>) 
        }
        <CartIcon />
    { hidden ? null : <CartDropdown />}
    </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);