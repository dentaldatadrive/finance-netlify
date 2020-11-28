import React, { useState, useEffect } from 'react';
import AdminView from "./components/AdminView/AdminView";
import UserView from "./components/UserView/UserView";

import Login from "./components/Login/Login";
import "./App.css";


function App() {

  const [userType, setUserType] = useState();
  const [userData, setUserData] = useState({});

  let mainContent = <Login setUserType={setUserType} setUserData={setUserData} />;

  if (userType === "admin") {
    mainContent = <AdminView logout={setUserType}/>
  } else if (userType === "user") {
    mainContent = <UserView logout={setUserType} setUserData={setUserData} userData={userData} />;
  }

    return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {mainContent}
      </main>
    </div>
  )
}

export default App
