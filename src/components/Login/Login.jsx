import React, { useState } from 'react';
import "./Login.css";

function Login(props) {

    const [loginType, setLoginType] = useState("user");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticationFail, setAuthenticationFail] = useState();

    function handleLogin(e) {
        e.preventDefault();
        let endpoint = "/api/loginUser";
        if (loginType === "admin") {
            endpoint = "/api/loginAdmin"
        }
        fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: username, password:password}),
          })
          .then(response => response.json())
          .then(data => {
            if (data) {
                props.setUserType(loginType);
                props.setUserData(data);
            } else {
                setAuthenticationFail(true);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
    
    function showErrorMessage() {
        if (authenticationFail) { 
            return <div className="login__error-message">Auhentication Failed</div>
        }
    }

    return (
    <div className="login">
        <form>
            <div className="login__options-wrapper">
                <input onChange={(e)=>setLoginType(e.target.value)} type="radio"  name="login-type" id="user" value="user" defaultChecked />
                <label htmlFor="user">User</label>
                <input onChange={(e)=>setLoginType(e.target.value)} type="radio" name="login-type" id="admin" value="admin"/>
                <label htmlFor="admin">Admin</label>
            </div>
            <div className="login__input-wrapper">
                <label>Username:</label>
                <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" value={username} id="username" placeholder="Username"/>
            </div>
            <div className="login__input-wrapper">
                <label>Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} name="password" id="password" placeholder="Password"/>
            </div>
            <div className="login__actions-wrapper">
                <button onClick={handleLogin}>Login</button>
            </div>
            {showErrorMessage()}
        </form>
    </div>
  )
}

export default Login
