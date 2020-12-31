import React, {useEffect, useState} from 'react';
import "./UserHeaderMenu.css";

import MyAccountHeaderDropdown from '../MyAccountHeaderDropdown/MyAccountHeaderDropdown';

function UserHeaderMenu(props) {

    const [customerInitials, setCustomerInitials] = useState("");

    function initLoggedInHeader(){
      setCustomerInitials((props.userData.firstname[0] + props.userData.lastname[0]).toUpperCase())
    }

    useEffect(()=>{
        if (props.userData.firstname) {
            initLoggedInHeader();
        }
    });


    return (
    <div className="userMenu">
      <span className="userMenu__userInitials">
        {customerInitials}
      </span>
      <span className="userMenu__userName">
        {props.userData.firstname} {props.userData.lastname}
      </span>
        <MyAccountHeaderDropdown/>
    </div>
  )
}

export default UserHeaderMenu
