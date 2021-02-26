import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss'


const Header = () => (
    <nav className="nav">
        <ul className="nav-items">
            <li>
                <Link to="/" className="logo-container">
                    Logo
                </Link>
            </li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><Link to="" >Contact</Link></li>
            <li className="push-right"><Link to="/sign-in" >Sign In</Link></li>
        </ul>
    </nav>
)

export default Header