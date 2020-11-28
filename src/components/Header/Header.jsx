import React from 'react';
import "./Header.css";

function Header(props) {

    function handleLogout(){
        props.logout("")
    }
        
    return (
    <header className="header">
        {props.userType? <button onClick={handleLogout}>Logout</button> : <a href="/">Login</a>}
    </header>
  )
}

export default Header
