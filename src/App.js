import React, { useState } from 'react';
import AdminView from "./components/AdminView/AdminView";
import UserView from "./components/UserView/UserView";

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Login from "./components/Login/Login";
import "./App.css";
import Header from './components/Header/Header';

import { connect } from 'react-redux';

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const mapStateToProps = state => {
  return {
    count: state
  };
};

let store = createStore(countReducer);


const Component = ({count, handleIncrementClick, handleDecrementClick}) => (
  <div>
    <h1>Helloworld React & Redux! {count}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({type: 'DECREMENT'})
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

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
        <Header userData = {userData} userType = {userType} logout={setUserType}/>
        <main>
          {mainContent}
        </main>
        <Provider store={store}>
          <Container />
        </Provider>
      </div>
  )
}

export default App
