import React, { useState, useEffect } from 'react';
import "./UserView.css";
import UserInfo from "../UserInfo/UserInfo";

function UserView(props) {

  function handleLogout() {
    props.logout("")
  }

  return (
  <div className="user-view">
      User View
      <button onClick={handleLogout}>Logout</button>
      <UserInfo userData={props.userData} setUserData={props.setUserData}/>
  </div>
  )
}

export default UserView
