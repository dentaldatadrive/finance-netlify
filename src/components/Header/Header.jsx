import React, { useState, useEffect } from 'react';
import "./Header.css";

function Header(props) {

    function handleLogout(){
        props.logout("")
    }
        
    return (
    <header className="header">
        {props.userData.firstname && props.userData.firstname.length > 0? <a onClick={handleLogout}>Logout</a> : <a href="/">Login</a>}
    </header>
  )
}

export default Header
