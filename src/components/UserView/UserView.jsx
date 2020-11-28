import React from 'react';
import "./UserView.css";
import UserInfo from "../UserInfo/UserInfo";

function UserView(props) {

  return (
  <div className="user-view">
      <UserInfo userData={props.userData} setUserData={props.setUserData}/>
  </div>
  )
}

export default UserView
