import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'


const Header = ({currentUser}) => (
    <nav className="nav">
        <ul className="nav-items">
            <li>
                <Link to="/" className="logo-container">
                    Logo
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
            
        </ul>
    </nav>
)

export default Header