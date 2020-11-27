import React, { useState, useEffect } from 'react';
import "./Login.css";

function Login() {

    const [loginType, setLoginType] = useState("login-user");

    function handleLoginTypeChange (e) {
        setLoginType(e.currentTarget.value);
    }

    function handleLogin() {

    }

    return (
    <div className="login">
        <form>
            <div className="login__options-wrapper">
                <input onChange={handleLoginTypeChange} type="radio"  name="login-type" id="login-user" value="login-user" defaultChecked />
                <label htmlFor="login-user">User</label>
                <input onChange={handleLoginTypeChange} type="radio" name="login-type" id="login-admin" value="login-admin"/>
                <label htmlFor="login-admin">Admin</label>
            </div>
            <div className="login__input-wrapper">
                <label>Username:</label>
                <input type="text" name="username" id="username" placeholder="Username"/>
            </div>
            <div className="login__input-wrapper">
                <label>Password:</label>
                <input type="text" name="password" id="password" placeholder="Password"/>
            </div>
            <div className="login__actions-wrapper">
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
