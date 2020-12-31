import React from 'react';
import "./Header.css";
import Logo from '../../images/logo.png';
import UserHeaderMenu from './UserHeaderMenu/UserHeaderMenu';

function Header(props) {

    function handleLogout(){
        props.logout("")
    }
        
    return (
    <header className="header">
        <div className="header__logo-wrapper">
            <span><img src={Logo} alt="Logo"/></span>
            <span className="header__logo-wrapper__title desktop-only">Lorem Ipsum</span>
        </div>
        <div className="header__links-wrapper">
            <i className="fa fa-bell"></i>
            <i className="fa fa-search"></i>
            <UserHeaderMenu userData={props.userData}/>
            {props.userType? <a href="/" onClick={handleLogout}>Logout</a> : <a href="/">Login</a>}
        </div>
    </header>
  )
}

export default Header
