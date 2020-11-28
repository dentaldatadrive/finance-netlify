import React, { useState, useEffect } from 'react';
import AdminView from "./components/AdminView/AdminView";
import UserView from "./components/UserView/UserView";

import Login from "./components/Login/Login";
import "./App.css";
import Header from './components/Header/Header';


function App() {

  const [userType, setUserType] = useState();
  const [userData, setUserData] = useState({});

  let mainContent = <Login setUserType={setUserType} setUserData={setUserData} />;

  if (userType === "admin") {
    mainContent = <AdminView adminUserData={userData}/>
  } else if (userType === "user") {
    mainContent = <UserView setUserData={setUserData} userData={userData} />;
  }

    return (
    <div className="App">
      <Header userData = {userData} logout={setUserData}/>
      <main>
        {mainContent}
      </main>
    </div>
  )
}

export default App
